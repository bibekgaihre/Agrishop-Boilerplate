import express, { Request, Response, NextFunction } from "express";
import userModel from "../Models/User";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.json("OK from Auth");
})

router.post("/register", async (req: Request, res: Response) => {
    try {
        let { username, email, role } = req.body;
        let user = await userModel.findOne({ $or: [{ email: email }, { username: username }] });
        if (user) res.json("User already exist")
        else {
            let data = await userModel.create({ username, email, role });
            res.json(data);
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/login", async (req: Request, res: Response) => {
    try {
        let { username, email } = req.body;
        let user = await userModel.findOne({ email: email });
        if (!user) res.json("email not registered")
        else {
            let data = await userModel.findOne({ $and: [{ email: email }, { username: username }] });
            if (!data) {
                return res.json("wrong credential");
            }
            res.json(data)
        }
    } catch (error) {
        console.log(error);
    }
})

export default router;