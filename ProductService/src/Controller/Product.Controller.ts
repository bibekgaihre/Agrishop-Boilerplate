import ProductService from "../Service/Product.Service";
import express, { Request, Response, NextFunction } from "express";
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


//injecting dependency
const productService = new ProductService();
const productController = new ProductController(productService);

export default productController