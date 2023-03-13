import amqplib from "amqplib";

interface MQConnection {
    connectRabbitMQ(): Promise<any>;
}

class MessageQueue implements MQConnection {
    async connectRabbitMQ() {
        return amqplib.connect(`${process.env.MQURL}`)
    }
}
class MessageQueueConfig extends MessageQueue {
    constructor() {
        super()
    }
    // async createChannel(channelErr,channel) {
    //     return (await this.connectRabbitMQ()).createChannel((channelErr,channel))
    // }
}

// new MessageQueueConfig().createChannel((channelErr, channel))