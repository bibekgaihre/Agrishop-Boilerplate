import express, { Request, Response, NextFunction } from "express";


const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.json("OK from Orders");
})

export default router;