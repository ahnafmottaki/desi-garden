const express = require("express");
const homeController = require("../controllers/home");

const router = express.Router();

router.get("/featuredGardeners", homeController.activeGardeners);

router.get("/featuredTips", homeController.featuredTips);

router.get("/browseTips", homeController.getBrowseTips);

router.get("/explore", homeController.getExploreGardener);

router.get("/alldata", homeController.getAllData);

module.exports = router;
