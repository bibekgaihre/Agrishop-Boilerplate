import paymentModel from "../Models/Payment";

export default class PaymentService {
    constructor() { }

    public createPayment = async (payload: object) => {
        return await paymentModel.create(payload);
    }

    public confirmPayment = async (payload: any) => {
        let orderId = payload.orderId;
        return await paymentModel.findOneAndUpdate({ orderId: orderId }, { $set: { isPaid: true } })
    }
}