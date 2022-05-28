import amqplib from "amqplib";

let channel: any, connection: any;
let exchange = "pub_sub_payment";
async function connect() {

    const server = "amqp://rabbitmq";
    connection = await amqplib.connect(server);
    channel = await connection.createChannel();
    await channel.assertExchange(exchange, 'fanout', { durable: false });
}

export default connect;
export { channel, connection, exchange };