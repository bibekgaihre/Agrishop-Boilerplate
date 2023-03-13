import express, { Request, Response, NextFunction } from "express";

import UserService from "../Service/User.Service"


// type ExpressRouteFunc = (req: Request, res: Response, next?: NextFunction) => void | Promise<void>;

const router = express.Router();

class UserController {
    private userService: UserService
    constructor(userService: UserService) {
        this.userService = userService
    }

    public registerUser = async (req: Request, res: Response) => {
        try {
            let data = await this.userService.saveUser(req.body);
            res.json(data);
        } catch (error) {
            console.log(error)
        }

    }

    public verifyUser = async (req: Request, res: Response) => {
        try {
            let data = await this.userService.authenticateUser(req.body);
            res.json(data);
        } catch (error) {
            console.log(error)
        }
    }


}
//dependency injection
const userService = new UserService();
const userController = new UserController(userService);

router.post("/register", userController.registerUser);
router.post("/login", userController.verifyUser);

router.get("/", async (req: Request, res: Response) => {
    res.json("OK from Auth");
})


export default router;