import mongoose, { ConnectOptions } from "mongoose";

interface DBConnection {
    connectMongoDB(): Promise<typeof mongoose | void>,
    connectMySQL(): void
}

export default class Database implements DBConnection {
    async connectMongoDB(): Promise<typeof mongoose | void> {
        return mongoose.connect(`${process.env.DATABASE}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        } as ConnectOptions).then(() => console.log(`DB connected ${process.env.DATABASE}`));
    }
    connectMySQL(): void {

    }
}
