import amqplib from "amqplib";
import amqp, { Connection, Channel } from "amqplib/callback_api";
import PaymentService from "../../Service/Payment.Service";


export interface IMessageQueue {
    connectRabbitMQ(): Promise<Connection>;
    createChannel(callback: (channel: Channel) => void): void;
    closeConnection(): void;
}


export class MessageQueue implements IMessageQueue {
    conn: Connection | null;

    constructor() {
        this.conn = null;
    }
    async connectRabbitMQ(): Promise<Connection> {
        return new Promise((resolve, reject) => {
            amqp.connect(`${process.env.MQURL}`, (err, conn) => {
                if (err) return reject(err);
                console.log("connected to RabbitMQ");
                this.conn = conn;
                resolve(this.conn);
            });
        })
    }
    createChannel(callback: (channel: Channel) => void) {

        if (!this.conn) {

            throw new Error('Not connected to RabbitMQ');
        }
        this.conn.createChannel((err, channel) => {
            if (err) throw err;
            callback(channel);
        });
    }

    closeConnection() {
        if (this.conn) {
            this.conn.close();
            console.log("disconnected from RabbitMQ");
            this.conn = null;
        }
    }
}
export class MessageQueueConfig {
    mqconnection: IMessageQueue;
    paymentService: PaymentService;
    exchange: string;
    constructor(mqconnection: IMessageQueue, paymentService: PaymentService) {
        this.mqconnection = mqconnection;
        this.exchange = "pub_sub_payment";
        this.paymentService = paymentService;
    }
    async receiveFromQueue() {

        await new Promise<void>((resolve, reject) => {
            this.mqconnection.connectRabbitMQ()
                .then(() => resolve())
                .catch((err) => {
                    console.log(err)
                    reject(err)
                }
                );
        });
        this.mqconnection.createChannel((channel) => {

            channel.assertExchange(this.exchange, 'topic', { durable: true });
            channel.assertQueue('', { exclusive: true }, (err, queue) => {
                console.log(`* Waiting for messages in ${queue}. To exit press CTRL+C`);
                channel.bindQueue(queue.queue, this.exchange, '');
                channel.consume(queue.queue, msg => {

                    let data = msg?.content.toString()
                    let d: any;
                    d = JSON.parse(data!);
                    //complete payment
                    if (!d.total) {
                        this.paymentService.confirmPayment(d).then(() => {
                            console.log("Payment Done");
                            channel.sendToQueue('notification', Buffer.from(JSON.stringify(d)))
                        });
                    } else if (d.total) {
                        this.paymentService.createPayment(d).then(() => {
                            console.log("Payment created for order");
                        })
                    }


                }, { noAck: true })
            })
        })
    }
}

