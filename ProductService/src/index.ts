import express, { Application, Response, Request, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./Routes/index";
import amqplib from "amqplib/callback_api";
import mqconnection from "./util/mqconnect";
dotenv.config();

const app: Application = express();
declare var process: {
    env: {
        DATABASE: string,
        PORT: number,
        MQURL: string
    }
}

mqconnection().then(() => console.log("connected to rabbitmq"));
// amqplib.connect('amqp://localhost', (connErr, connection) => {
//     if (connErr) {
//         throw connErr;
//     }
//     const exchange = "pub_sub_payment";
//     const queue = "order_payment";
//     const routingKey = ""
//     let msg = "hello from publisher";
//     connection.createChannel((channelErr, channel) => {
//         if (channelErr) throw channelErr
//         channel.assertExchange(exchange, 'fanout', { durable: false });

//         channel.publish(exchange, routingKey, Buffer.from(msg));
//         console.log("message sent");
//         setTimeout(() => {
//             connection.close()
//         }, 500);
//     })
// })



const PORT = process.env.PORT || 8083;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
} as ConnectOptions).then(() => console.log(`DB connected ${process.env.DATABASE}`));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api/v1/products/", Router);
app.listen(PORT, () => {
    console.log("Running Product Service on Port", PORT);
})
