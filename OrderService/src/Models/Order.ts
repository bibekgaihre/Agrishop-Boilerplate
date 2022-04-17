import { Document, Schema, ObjectId, model } from "mongoose";

interface Order {
    product: string,
    user: string,

}