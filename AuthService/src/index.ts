import express, { Application, Response, Request, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./Routes/index";
import Database from "./util/connectors/db";

dotenv.config();


const app: Application = express();
declare var process: {
    env: {
        DATABASE: string,
        PORT: number
    }
}

const PORT = process.env.PORT || 8080;
new Database().connectMongoDB();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api/v1/", Router);
app.listen(PORT, () => {
    console.log("Running Auth Service on Port", PORT);
})


