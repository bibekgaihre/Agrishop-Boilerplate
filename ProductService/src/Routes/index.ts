import express, { Request, Response, NextFunction } from "express";
import productModel from "../Models/Product";


const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.json("OK from Products");
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
        let { sellerId, productName, productDescription, availability, total } = req.body;
        //check whether product already exists
        let product = await productModel.findOne({ productName: productName });
        if (product) return res.json("Product already exist");
        else {
            let productData = await productModel.create({ sellerId, productName, productDescription, availability, total });
            return res.json(productData);
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/pay/:productId", async (req: Request, res: Response) => {
    //check if product is available
    //userid, productid 
    //send message to topic 
    //send message both order and payment
    //set ispaid to false
});

router.post("/checkout/:productId", async (req: Request, res: Response) => {
    //check if product is available
    //userid, productid
    //send message to both order and payment for update
    //set ispaid to true
});




export default router;