import express, { Application, Response, Request, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./Routes/index";
import amqplib from "amqplib/callback_api";
import Database from "./util/connectors/db";
import PaymentController from "./Service/Payment.Service";
import { MessageQueue, MessageQueueConfig } from "./util/connectors/mq";
import { Connection, Channel } from "amqplib/callback_api";
import PaymentService from "./Service/Payment.Service";

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
// Database Configuration
new Database().connectMongoDB();

// Message Queue Configuration
(async function () {
    const mq = new MessageQueue();

    const paymentService = new PaymentService()
    const messageQueueConfig = new MessageQueueConfig(mq, paymentService);
    messageQueueConfig.receiveFromQueue()
})()

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api/v1/payments/", Router);
app.listen(PORT, () => {
    console.log("Running Payment Service on Port", PORT);
})
