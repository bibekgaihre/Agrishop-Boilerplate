import amqplib from "amqplib/callback_api";
import express, { Application } from "express";
import http from "http";
import dotenv from "dotenv";

import { Server } from "socket.io";
const app: Application = express();
dotenv.config();
declare var process: {
    env: {
        PORT: number
    }
}

let server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});
const io = new Server(server, { transports: ["websocket", "polling"], allowEIO3: true, });


io.on("connection", (socket) => {
    console.log("connection made");
})


app.use(express.json());


amqplib.connect('amqp://localhost', (connErr, connection) => {
    if (connErr) throw connErr
    // const exchange = "notification";
    const queue = "notification";
    const routingKey = "";
    connection.createChannel((channelErr, channel) => {
        if (channelErr) throw channelErr;
        // channel.assertExchange(exchange, 'direct', { durable: false });
        channel.assertQueue('notification', { exclusive: true }, (err, queue) => {
            console.log(`* Waiting for messages in ${queue}. To exit press CTRL+C`);
            // channel.bindQueue(queue.queue, exchange, '');
            channel.consume(queue.queue, msg => {
                console.log(`incoming notification ${msg?.content.toString()}`);
                let data = msg?.content.toString();
                let d: any;
                d = JSON.parse(data!);
                io.emit("notification", `Payment made for order ${d.orderId}`)
            }, { noAck: true })
        })

    })
})

