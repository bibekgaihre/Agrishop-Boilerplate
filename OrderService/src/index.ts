import express, { Application, Response, Request, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./Routes/index";
import OrderController from "./Controller/Order";
import amqplib from "amqplib/callback_api";
dotenv.config();


const app: Application = express();
declare var process: {
    env: {
        DATABASE: string,
        PORT: number
    }
}

const PORT = process.env.PORT || 8081;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
} as ConnectOptions).then(() => console.log(`DB connected ${process.env.DATABASE}`));

amqplib.connect('amqp://localhost', (connErr, connection) => {
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
                let order = new OrderController();
                //create order
                if (!d.paidOn) {
                    order.createOrder(d).then(() => {
                        console.log("order created");
                    })
                } else if (d.paidOn) {
                    order.updateOrder(d).then(() => {
                        console.log("order updated");
                    })
                }

            }, { noAck: true })
        })

    })
})
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api/v1/orders/", Router);
app.listen(PORT, () => {
    console.log("Running Order Service on Port", PORT);
})
