import express from "express";
import userController from "../Controller/User.Controller";
import sellerController from "../Controller/Seller.Controller";



const router = express.Router();

router.post("/users/register", userController.registerUser);
router.post("/users/login", userController.verifyUser);
router.put("/sellers/:sellerId", sellerController.updateSeller);
router.get("/sellers", sellerController.getSeller)



export default router;