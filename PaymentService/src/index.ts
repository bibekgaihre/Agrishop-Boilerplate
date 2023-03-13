import express, { Application, Response, Request, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./Routes/index";
import amqplib from "amqplib/callback_api";
import Database from "./util/connectors/db";
import PaymentController from "./Controller/Payment";


dotenv.config();

const app: Application = express();
declare var process: {
    env: {
        DATABASE: string,
        PORT: number,
        MQURL: string
    }
}

const PORT = process.env.PORT || 8082;

new Database().connectMongoDB();

amqplib.connect('amqp://rabbitmq', (connErr, connection) => {
    if (connErr) throw connErr
    const exchange = "pub_sub_payment";
    const queue = "order_payment";
    const routingKey = "";
    connection.createChannel((channelErr, channel) => {
        if (channelErr) throw channelErr;
        channel.assertExchange(exchange, 'fanout', { durable: false });
        channel.assertQueue('', { exclusive: true }, (err, queue) => {
            console.log(`* Waiting for messages in ${queue}. To exit press CTRL+C`);
            channel.bindQueue(queue.queue, exchange, '');
            channel.consume(queue.queue, msg => {

                let data = msg?.content.toString()
                let d: any;
                d = JSON.parse(data!);
                let payment = new PaymentController();
                //complete payment
                if (!d.total) {
                    payment.confirmPayment(d).then(() => {
                        console.log("Payment Done");
                        channel.sendToQueue('notification', Buffer.from(JSON.stringify(d)))
                    });
                } else if (d.total) {
                    payment.createPayment(d).then(() => {
                        console.log("Payment created for order");
                    })
                }

                // data = JSON.parse(data);
            }, { noAck: true })
        })

    })
})

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api/v1/payments/", Router);
app.listen(PORT, () => {
    console.log("Running Payment Service on Port", PORT);
})
