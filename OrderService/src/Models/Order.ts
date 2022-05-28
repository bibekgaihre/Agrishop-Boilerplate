import { Document, Schema, ObjectId, model } from "mongoose";

interface Order {
    product: string,
    user: string,
    date: {
        start: Date,
        end: Date
    }
}

const orderSchema = new Schema<Order>(
    {
        product: String,
        user: String,
        date: {
            start: Date,
            end: Date
        }
    },
    {
        timestamps: true
    }
);

export default model<Order>("Order", orderSchema);