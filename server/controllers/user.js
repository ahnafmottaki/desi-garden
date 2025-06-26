const { ObjectId } = require("mongodb");
const { db } = require("../database/mongodb.init");
const tipsCollection = db.collection("tips");

exports.postAddTip = async (req, res) => {
  const tip = req.body;
  const result = await tipsCollection.insertOne(tip);
  res.send(result);
};

exports.getTipById = async (req, res) => {
  const { tipId } = req.params;
  try {
    const tip = await tipsCollection.findOne({ _id: new ObjectId(tipId) });
    res.send(tip);
  } catch (err) {
    if (err) {
      if (err.name === "BSONError") {
        res.send({ error: true, message: "Invalid Id Format" });
      }
    }
  }
};

exports.postTipsByUser = async (req, res) => {
  const { email } = req.body;
  const tips = await tipsCollection.find({ email }).toArray();
  res.send(tips);
};

exports.putEditTip = async (req, res) => {
  const tipId = req.params.tipId;
  const tipDetail = req.body;
  const result = await tipsCollection.updateOne(
    { _id: new ObjectId(tipId) },
    { $set: tipDetail }
  );
  res.send(result);
};

exports.deleteTipById = async (req, res) => {
  const { tipId } = req.params;
  const result = await tipsCollection.deleteOne({ _id: new ObjectId(tipId) });
  res.send(result);
};

exports.putAddLikes = async (req, res) => {
  const tipId = req.params.tipId;
  const result = await tipsCollection.updateOne(
    { _id: new ObjectId(tipId) },
    { $inc: { totalLikes: 1 } }
  );
  res.send(result);
};
