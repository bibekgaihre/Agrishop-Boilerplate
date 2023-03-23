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
    async updateProduct(productId: string, product: Product): Promise<Product | string> {
        let data = await productModel.findOneAndUpdate({ _id: productId, sellerId: product.sellerId }, product, { new: true });
        if (data) {
            return data;
        } else {
            return "Could not update the data"
        }

    }
    async saveProduct(product: Product): Promise<Product | string> {
        let data = await productModel.findOne({ sellerId: product.sellerId, productName: product.productName });
        if (data) return "Product Name already exist";
        else {
            return productModel.create(product);
        }
    }
}