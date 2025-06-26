const { db } = require("../database/mongodb.init");

exports.activeGardeners = async (req, res) => {
  const gardenersCollection = db.collection("gardeners");
  const gardeners = await gardenersCollection
    .find({ status: "active" })
    .limit(6)
    .toArray();
  res.send(gardeners);
};

exports.featuredTips = async (req, res) => {
  const trendingTipsCollection = db.collection("tips");
  const trendingTips = await trendingTipsCollection.find().limit(6).toArray();
  res.send(trendingTips);
};

exports.getBrowseTips = async (req, res) => {
  const tipsCollection = db.collection("tips");
  const tips = await tipsCollection.find({ availability: "public" }).toArray();
  res.send(tips);
};

exports.getExploreGardener = async (req, res) => {
  const gardenersCollection = db.collection("gardeners");
  const gardeners = await gardenersCollection.find().toArray();
  console.log(gardeners);
  res.send(gardeners);
};
