import express, { Request, Response, NextFunction } from "express";
import productModel from "../Models/Product";
import { channel, connection, exchange } from "../util/mqconnect";
import ProductService from "../Service/Product.Service";
import PaymentService from "../Service/Payment.Service";


const router = express.Router();

class ProductController {
    private productService: ProductService
    constructor(productService: ProductService) {
        this.productService = productService
    }
    public getProducts = async (req: Request, res: Response) => {
        try {
            let sellerId = req.query.sellerId || "";
            let data;
            if (sellerId) {
                data = await this.productService.getProductBySeller(sellerId.toString());
                if (data.length === 0) {
                    return res.json("Seller Not Found");
                }
            } else data = await this.productService.getProducts();
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
    public getProduct = async (req: Request, res: Response) => {
        try {
            let data = await this.productService.getProduct(req.params.productId);
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
    public createProduct = async (req: Request, res: Response) => {
        try {
            let data = await this.productService.saveProduct(req.body);
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
}

class PaymentController {
    private productService: ProductService
    private paymentService: PaymentService
    constructor(productService: ProductService, paymentService: PaymentService) {
        this.productService = productService;
        this.paymentService = paymentService;
    }
    public createPayment = async (req: Request, res: Response) => {
        try {
            let { productId } = req.params;
            let { userId, date_start, date_end } = req.body;
            let product = await this.productService.getProduct(productId);
            if (!product || !product.availability) return res.json("Product not found");
            else {
                let orderId = Math.random().toString(12).slice(2).substring(0, 6);
                let orderMessage = {
                    productId,
                    orderId,
                    total: product.unitPrice,
                    userId,
                    date: {
                        start: date_start,
                        end: date_end
                    }
                }
                let data = this.paymentService.createPayment(orderMessage);
                res.json(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    public confirmPurchase = async (req: Request, res: Response) => {
        try {
            let { productId } = req.params;
            let { userId, orderId } = req.body;
            let product = await this.productService.getProduct(productId);
            if (!product || !product.availability) return res.json("Product not found");
            else {
                let paymentMessage = {
                    productId,
                    orderId,
                    userId,
                    paidOn: new Date()
                };
                let data = this.paymentService.confirmPurchase(paymentMessage);
                res.json(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
}



//injecting dependency
const productService = new ProductService();
const paymentService = new PaymentService();
const productController = new ProductController(productService);
const paymentController = new PaymentController(productService, paymentService);


//get all products or products by seller id
router.get("/", productController.getProducts)

router.get("/:productId", productController.getProduct);

router.post("/", productController.createProduct);

router.post("/:productId/create-payment", paymentController.createPayment);

router.post("/:productId/confirm-purchase", paymentController.confirmPurchase);






export default router;