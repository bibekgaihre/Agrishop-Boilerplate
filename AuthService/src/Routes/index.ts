import express from "express";
import userController from "../Controller/User.Controller";
import sellerController from "../Controller/Seller.Controller";
import favoriteController from "../Controller/Favorite.Controller";


const router = express.Router();

router.post("/users/register", userController.registerUser);
router.post("/users/login", userController.verifyUser);
router.put("/sellers/:sellerId", sellerController.updateSeller);
router.get("/sellers", sellerController.getSeller);
router.post("/favorites", favoriteController.create);
router.get("/favorites/:userId", favoriteController.get);
router.delete("/favorites/:favoriteId", favoriteController.remove);



export default router;