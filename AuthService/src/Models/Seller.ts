import { Document, Schema, ObjectId, model } from "mongoose";


export interface Seller {
    sellerId: ObjectId,
    country: string,
    address: {
        streetName: string,
        buildingNumber: string,
        postalCode: string,
        cityName: string
    },
    name: string,
    phone: string,
    email: string
}

const sellerSchema = new Schema<Seller>(
    {
        sellerId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        address: {
            streetName: String,
            buildingNumber: String,
            postalCode: String,
            cityName: String
        },
        name: String,
        phone: String,
        email: String
    },
    { timestamps: true }
)

export default model<Seller>("Seller", sellerSchema);