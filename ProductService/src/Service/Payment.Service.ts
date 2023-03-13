import { channel, connection, exchange } from "../util/mqconnect";
import productModel from "../Models/Product";
interface Order {
    productId: string,
    orderId: string,
    total?: number,
    userId: string,
    date?: {
        start: string,
        end: string
    }
    paidOn?: Date
}
export default class PaymentService {
    createPayment(order: Order): string {
        channel.publish(exchange, "", Buffer.from(JSON.stringify(order)), { persistent: true });
        console.log("order sent");
        return `Order Number ${order.orderId} created.Please pay further to confirm`
    }
    confirmPurchase(order: Order): string {
        channel.publish(exchange, "", Buffer.from(JSON.stringify(order)));
        console.log("confirmed purchase");
        return `Payment Processing. You will be notified automatically`;
    }

}