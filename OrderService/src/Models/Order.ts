import { Document, Schema, ObjectId, model, Model } from "mongoose";

interface Order {
    orderId: string,
    productId: string,
    userId: string,
    date: {
        start: Date,
        end: Date
    },
    paidOn: Date
}

const orderSchema = new Schema<Order>(
    {
        orderId: String,
        productId: String,
        userId: String,
        date: {
            start: Date,
            end: Date
        },
        paidOn: Date
    },
    {
        timestamps: true
    }
);

export default model<Order>("Order", orderSchema);
