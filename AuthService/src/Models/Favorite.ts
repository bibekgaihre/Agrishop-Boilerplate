import { Document, Schema, ObjectId, model } from "mongoose";


export interface Favorite {
    userId: Schema.Types.ObjectId,
    productId: Schema.Types.ObjectId
}

const favoriteSchema = new Schema<Favorite>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        productId: Schema.Types.ObjectId
    }, {
    timestamps: true
}
)

export default model<Favorite>("Favorite", favoriteSchema);