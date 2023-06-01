import FavoriteService from "../Service/Favorite.Service";
import { Request, Response } from "express";

class FavoriteController {
    private favoriteService: FavoriteService
    constructor(favoriteService: FavoriteService) {
        this.favoriteService = favoriteService
    };

    public create = async (req: Request, res: Response) => {
        try {
            let data = await this.favoriteService.addToFavorite(req.body);
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    public get = async (req: Request, res: Response) => {
        try {
            let data = await this.favoriteService.getFavorites(req.params.userId);
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    public remove = async (req: Request, res: Response) => {
        try {
            let data = await this.favoriteService.removeFromFavorite(req.params.favoriteId);
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
}

const favoriteService = new FavoriteService();
const favoriteController = new FavoriteController(favoriteService);

export default favoriteController;