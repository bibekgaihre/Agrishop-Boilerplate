import orderModel from "../Models/Order";

export default class OrderService {
    constructor() { }

    public createOrder = async (payload: object) => {
        return await orderModel.create(payload);
    }
    public updateOrder = async (payload: any) => {
        let orderId = payload.orderId;
        return await orderModel.findOneAndUpdate({ orderId: orderId }, { $set: { paidOn: payload.paidOn } })
    }
}