import { Document, Schema, ObjectId, model } from "mongoose";

interface Payment {
    user: string,
    order: string,
    product: string,
    total: number,
    isPaid: boolean
}

const paymentSchema = new Schema<Payment>({
    user: String,
    order: String,
    product: String,
    total: Number,
    isPaid: {
        type: Boolean,
        default: false
    }
});

export default model<Payment>("Payment", paymentSchema);
