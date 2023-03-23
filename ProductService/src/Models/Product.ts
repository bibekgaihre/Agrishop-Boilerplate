import { Document, Schema, ObjectId, model } from "mongoose";

export interface Product {
    sellerId: string,
    productName: string,
    productDescription: string,
    productHighlights: string[],
    specification: {
        frameType: string,
        brakes: string,
        wheels: string,
        gears: string,
        model: string,
        weight: number
    },
    size: string[],
    availability: boolean,
    unitPrice: number,
    total: number
}

const productSchema = new Schema<Product>(
    {
        sellerId: String,
        productName: String,
        productDescription: String,
        productHighlights: [
            { type: String }
        ],
        specification: {
            frameType: String,
            brakes: String,
            wheels: String,
            gears: String,
            model: String,
            weight: Number
        },
        size: [
            {
                type: String
            }
        ],
        availability: {
            type: Boolean,
            default: true
        },
        unitPrice: Number,
        total: Number
    },
    {
        timestamps: true
    }
);

export default model<Product>("product", productSchema);