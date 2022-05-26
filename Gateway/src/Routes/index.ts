import express, { Request, Response, NextFunction } from "express";
import UserController from "../Controller/User";
import { secureAPI, roleCheck } from "../Middleware/Auth";




const router = express.Router();
//implement authorization on each routes

router.get("/", async (req: Request, res: Response) => {
    res.json("OK from Gateway");
})
//reroute to product service
router.get("/products", secureAPI(), async (req: Request, res: Response) => {


});

router.post("/products", secureAPI(), roleCheck(["seller"]), async (req: Request, res: Response) => {

})
//this should create order with payment==false
router.post("/products/:productId/pay", roleCheck(["buyer"]), async (req: Request, res: Response) => {

});
//this should update the order with payment==true and send notification
router.post("/products/:productId/confirm-checkout", roleCheck(["buyer"]), async (req: Request, res: Response) => {

});

//reroute to Auth service
router.post("/users/login", async (req: Request, res: Response) => {
    let { username, email } = req.body;
    let user = new UserController();
    let loginData = await user.validateUser(username, email);
    res.json(loginData);
});

router.post("/users/register", async (req: Request, res: Response) => {
    let { username, email, role } = req.body;
    let user = new UserController();
    let loginData = await user.registerUser(username, email, role);
    res.json(loginData);
});



//reroute to Order service
router.get("/orders");
router.get("/orders/:orderId");



export default router;