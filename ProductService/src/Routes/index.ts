import express, { Request, Response, NextFunction } from "express";
import productModel from "../Models/Product";
import { channel, connection, exchange } from "../util/mqconnect";


const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        let products = await productModel.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
    }
});

router.get("/:sellerId", async (req: Request, res: Response) => {
    try {
        const { sellerId } = req.params;
        let product = await productModel.find({ sellerId: sellerId });
        if (product.length === 0) return res.json("No products available");
        else if (product) {
            res.json(product);
        } else {
            res.json("Seller Not Found");
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        let { sellerId, productName, productDescription, availability, unitPrice, total } = req.body;
        //check whether product already exists
        let product = await productModel.findOne({ productName: productName });
        if (product) return res.json("Product already exist");
        else {
            let productData = await productModel.create({ sellerId, productName, productDescription, availability, unitPrice, total });
            return res.json(productData);
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/pay/:productId", async (req: Request, res: Response) => {
    //check if product is available
    try {
        let { productId } = req.params;
        let { userId, date_start, date_end } = req.body;
        //can be decoupled
        let product = await productModel.findOne({ _id: productId });
        if (!product || !product.availability) return res.json("Product not found");
        else {
            //generate random order id
            let orderId = Math.random().toString(12).slice(2).substring(0, 6);
            let orderMessage: object = {
                productId,
                orderId,
                total: product.unitPrice,
                userId,
                date: {
                    start: date_start,
                    end: date_end
                }
            }
            channel.publish(exchange, "", Buffer.from(JSON.stringify(orderMessage)));
            console.log("order sent");
            // setTimeout(() => {
            //     connection.close()
            // }, 500);
            //get price, o
            res.json(`Order Number ${orderId} created. Please pay further to confirm`);
        }
    } catch (error) {
        console.log(error);
    }

});

router.post("/checkout/:productId", async (req: Request, res: Response) => {
    try {
        let { productId } = req.params;
        let { userId, orderId } = req.body;

        let product = await productModel.findOne({ _id: productId });
        if (!product || !product.availability) return res.json("Product not found");
        else {
            let paymentMessage: object = {
                productId,
                orderId,
                userId,
                paidOn: new Date()
            };
            // setTimeout(() => {
            //     connection.close()
            // }, 500);
            channel.publish(exchange, "", Buffer.from(JSON.stringify(paymentMessage)));
            res.json(`Payment Processing. You will be notified automatically`);
        }

    } catch (error) {
        console.log(error);
    }
});




export default router;