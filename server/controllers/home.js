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

exports.getAllData = async (req, res) => {
  const gardenersCollection = db.collection("gardeners");
  const tipsCollection = db.collection("tips");

  const [
    tips,
    gardeners_count,
    male_gardeners,
    female_gardeners,
    active_gardeners,
  ] = await Promise.all([
    tipsCollection.find({}).toArray(),
    gardenersCollection.countDocuments({}),
    gardenersCollection.countDocuments({ gender: "Male" }),
    gardenersCollection.countDocuments({
      gender: "Female",
    }),
    gardenersCollection.countDocuments({
      status: "active",
    }),
  ]);

  const tips_count = tips.length;
  const available_tips_count = tips.reduce(
    (availableCount, tip) =>
      tip.availability === "public" ? availableCount + 1 : availableCount,
    0
  );

  const total_likes = tips.reduce(
    (total_likes, tip) => tip.totalLikes + total_likes,
    0
  );

  res.send({
    tips_count,
    gardeners_count,
    male_gardeners,
    female_gardeners,
    available_tips_count,
    active_gardeners,
    total_likes,
  });
};
