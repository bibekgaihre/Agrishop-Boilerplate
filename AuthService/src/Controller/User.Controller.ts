import UserService from "../Service/User.Service";
import express, { Request, Response, NextFunction } from "express";

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

export default userController;