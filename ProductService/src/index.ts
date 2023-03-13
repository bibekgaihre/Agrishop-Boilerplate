import express, { Application, Response, Request, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
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
