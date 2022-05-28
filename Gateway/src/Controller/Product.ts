import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
declare var process: {
    env: {
        PRODUCT_SERVICE_URL: string,
        JWT_SECRET: string
    }
}


export default class Product {
    constructor() { }
    //only seller can create
    public createProduct = async (sellerId: string, productName: string, productDescription: string, availability: boolean, unitPrice: number, total: number) => {
        try {
            let result = await axios({
                method: "post",
                url: process.env.PRODUCT_SERVICE_URL,
                data: {
                    sellerId,
                    productName,
                    productDescription,
                    availability,
                    unitPrice,
                    total
                }
            });
            return result.data;
        } catch (error: any) {
            console.log(error);
            if (error.code == "ENOTFOUND") {
                return "Server is unavailable currently."
            }
        }
    }
    public getAllProducts = async () => {
        try {
            let result = await axios({
                method: "GET",
                url: process.env.PRODUCT_SERVICE_URL
            });
            return result.data;
        } catch (error: any) {
            console.log(error);
            if (error.code == "ENOTFOUND") {
                return "Server is unavailable currently."
            }
        }
    }
    //only buyer can confirm payment
    public confirmPayment = async (userId: string, orderId: string, productId: string) => {
        try {
            let result = await axios({
                method: "POST",
                url: process.env.PRODUCT_SERVICE_URL + "/checkout/" + productId,
                data: {
                    userId,
                    orderId
                }
            });
            return result.data;
        } catch (error: any) {
            console.log(error);
            if (error.code == "ENOTFOUND") {
                return "Server is unavailable currently."
            }
        }
    }
    //only buyer can get a rent for product
    public rentProduct = async (userId: string, date_start: string, date_end: string, productId: string) => {
        try {
            let result = await axios({
                method: "POST",
                url: process.env.PRODUCT_SERVICE_URL + "/pay/" + productId,
                data: {
                    userId,
                    date_start,
                    date_end
                }
            });
            return result.data;
        } catch (error: any) {
            console.log(error);
            if (error.code == "ENOTFOUND") {
                return "Server is unavailable currently."
            }
        }
    }
}