import ProductService from "../Service/Product.Service";
import PaymentService from "../Service/Payment.Service";
import express, { Request, Response, NextFunction } from "express";

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
const paymentController = new PaymentController(productService, paymentService);

export default paymentController