
import { Favorite } from "../Models/Favorite";
import favoriteModel from "../Models/Favorite"

export default class FavoriteService {
    async getFavorites(userId: string): Promise<Favorite[]> {
        return await favoriteModel.find({ userId: userId });
    }

    async addToFavorite(favorite: Favorite): Promise<Favorite | string> {
        let data = await favoriteModel.findOne({ userId: favorite.userId });
        if (data) return "Product is already on Favorite list";
        else return await favoriteModel.create(favorite);
    }

    async removeFromFavorite(favoriteId: string): Promise<Favorite | string> {
        let data = await favoriteModel.findOneAndDelete({ _id: favoriteId });
        if (data) return data
        else return "FavoriteId does not exist";
    }
}