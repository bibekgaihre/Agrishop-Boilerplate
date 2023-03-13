import express, { Request, Response, NextFunction } from "express";
import UserController from "../Controller/User";
import ProductController from "../Controller/Product";
import { secureAPI, roleCheck } from "../Middleware/Auth";




const router = express.Router();
//implement authorization on each routes

router.get("/", async (req: Request, res: Response) => {
    res.json("OK from Gateway");
})
//reroute to product service
router.get("/products", secureAPI(), async (req: Request, res: Response) => {
    let product = new ProductController();
    let data = await product.getAllProducts();
    res.json(data);
});

router.post("/products", secureAPI(), roleCheck(["seller"]), async (req: Request, res: Response) => {
    let { decoded } = res.locals;
    let sellerId = decoded.userData.uid;
    let { productName, productDescription, availability, unitPrice, total } = req.body;
    let product = new ProductController();
    let data = await product.createProduct(sellerId, productName, productDescription, availability, unitPrice, total);
    res.json(data);
})
//this should create order with payment==false
router.post("/products/:productId/create-payment", secureAPI(), roleCheck(["buyer"]), async (req: Request, res: Response) => {
    let { decoded } = res.locals;
    let userId = decoded.userData.uid;
    let { date_start, date_end } = req.body;
    let { productId } = req.params;
    let product = new ProductController();
    let data = await product.rentProduct(userId, date_start, date_end, productId);
    res.json(data);


});
//this should update the order with payment==true and send notification
router.post("/products/:productId/confirm-purchase", secureAPI(), roleCheck(["buyer"]), async (req: Request, res: Response) => {
    let { decoded } = res.locals;
    let userId = decoded.userData.uid;
    let { orderId } = req.body;
    let { productId } = req.params;
    let product = new ProductController();
    let data = await product.confirmPayment(userId, orderId, productId);
    res.json(data);
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