import express from "express";
import productController from "../Controller/Product.Controller";
import paymentController from "../Controller/Payment.Controller";

const router = express.Router();




//get all products or products by seller id
router.get("/", productController.getProducts)

router.get("/:productId", productController.getProduct);

router.post("/", productController.createProduct);

router.post("/:productId/create-payment", paymentController.createPayment);

router.post("/:productId/confirm-purchase", paymentController.confirmPurchase);






export default router;