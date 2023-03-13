import productModel from "../Models/Product";
import { Product } from "../Models/Product";


export default class ProductService {
    async getProducts(): Promise<Product[]> {
        return productModel.find({});
    }
    async getProduct(id: string): Promise<Product | null> {
        return productModel.findOne({ _id: id })
    }
    async getProductBySeller(sellerId: string): Promise<Product[]> {
        return productModel.find({ sellerId: sellerId });
    }
    async removeProduct() {

    }
    async updateProduct() {

    }
    async saveProduct(product: Product): Promise<Product | string> {
        let data = await productModel.findOne({ productName: product.productName });
        if (data) return "Product Name already exist";
        else {
            return productModel.create(product);
        }
    }
}