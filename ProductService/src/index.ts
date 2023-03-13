import express, { Application } from "express";

import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import Router from "./Routes/index";

import mqconnection from "./util/mqconnect";
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

mqconnection().then(() => console.log("connected to rabbitmq"));



const PORT = process.env.PORT || 8083;
new Database().connectMongoDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api/v1/products/", Router);
app.listen(PORT, () => {
    console.log("Running Product Service on Port", PORT);
})
