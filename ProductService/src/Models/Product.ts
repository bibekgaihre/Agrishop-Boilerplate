import { Document, Schema, ObjectId, model } from "mongoose";

interface Product {
    user: string,
    productName: string,
    productDescription: string,
    availability: boolean,
    total: number
}

const productSchema = new Schema<Product>(
    {
        user: String,
        productName: String,
        productDescription: String,
        availability: {
            type: Boolean,
            default: true
        },
        total: Number
    }
);

export default model<Product>("product", productSchema);