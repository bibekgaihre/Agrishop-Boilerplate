import { Document, Schema, ObjectId, model } from "mongoose";

interface Payment {
    order: string,
    total: number,
    isPaid: boolean
}

const paymentSchema = new Schema<Payment>({
    order: String,
    total: Number,
    isPaid: {
        type: Boolean,
        default: false
    }
});

export default model<Payment>("Payment", paymentSchema);
