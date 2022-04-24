import express, { Application, Response, Request, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./Routes/index";
dotenv.config();


const app: Application = express();
declare var process: {
    env: {
        DATABASE: string,
        PORT: number
    }
}

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api/v1/", Router);
app.listen(PORT, () => {
    console.log("Running Gateway on Port", PORT);
})


