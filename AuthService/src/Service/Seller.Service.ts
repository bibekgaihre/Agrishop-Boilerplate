import { Seller } from "../Models/Seller";
import sellerModel from "../Models/Seller";
import userModel from "../Models/User";

export default class SellerService {
    async updateSellerInformation(sellerId: string, seller: Seller): Promise<string | Seller> {
        let data = await userModel.findOne({ _id: sellerId });
        if (!data) return "Seller Not Found"
        else {
            let sellerData = await sellerModel.findOneAndUpdate({ sellerId: sellerId }, seller, { upsert: true, new: true });
            if (sellerData) return sellerData
            else return "Not Found"
        }
    }
    async getSellers(): Promise<Seller[]> {
        return await sellerModel.find();
    }

}