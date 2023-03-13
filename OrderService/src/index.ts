import express, { Application, Response, Request, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./Routes/index";
import OrderController from "./Controller/Order";
import amqplib from "amqplib/callback_api";
import Database from "./util/connectors/db";
dotenv.config();


const app: Application = express();
declare var process: {
    env: {
        DATABASE: string,
        PORT: number,
        MQURL: string
    }
}

const PORT = process.env.PORT || 8081;

new Database().connectMongoDB();

amqplib.connect(process.env.MQURL, (connErr, connection) => {
    if (connErr) throw connErr
    const exchange = "pub_sub_payment";
    const queue = "order_payment";
    const routingKey = "";
    connection.createChannel((channelErr, channel) => {
        if (channelErr) throw channelErr;
        channel.assertExchange(exchange, 'topic', { durable: true });
        channel.assertQueue('', { exclusive: true, durable: true }, (err, queue) => {
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
                if (msg) {
                    channel.ack(msg)
                }

            }, { noAck: false })
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
