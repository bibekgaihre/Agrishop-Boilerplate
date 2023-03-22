
import express, { Request, Response, NextFunction } from "express";
import SellerService from "../Service/Seller.Service";

class SellerController {
    private sellerService: SellerService;
    constructor(sellerService: SellerService) {

        this.sellerService = sellerService
    }
    public updateSeller = async (req: Request, res: Response) => {
        try {
            let data = await this.sellerService.updateSellerInformation(req.params.sellerId, req.body);
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
    public getSeller = async (req: Request, res: Response) => {
        try {
            let data = await this.sellerService.getSellers();
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
}

const sellerService = new SellerService();
const sellerController = new SellerController(sellerService);

export default sellerController;

