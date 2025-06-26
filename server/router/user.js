const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.post("/addTip", userController.postAddTip);

router.get("/tipDetail/:tipId", userController.getTipById);

router.post("/myTips", userController.postTipsByUser);

router.put("/editTip/:tipId", userController.putEditTip);

router.delete("/deleteTip/:tipId", userController.deleteTipById);

router.put("/addLike/:tipId", userController.putAddLikes);

module.exports = router;
