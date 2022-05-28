import { Document, Schema, ObjectId, model } from "mongoose";

interface Product {
    sellerId: string,
    productName: string,
    productDescription: string,
    availability: boolean,
    total: number
}

const productSchema = new Schema<Product>(
    {
        sellerId: String,
        productName: String,
        productDescription: String,
        availability: {
            type: Boolean,
            default: true
        },
        total: Number
    },
    {
        timestamps: true
    }
);

export default model<Product>("product", productSchema);