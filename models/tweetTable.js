const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  tweet: [{ type: Schema.Types.ObjectId, ref: "Tweet" }]
});

const TweetTable = mongoose.model("TweetTable", menuSchema);

module.exports = TweetTable;
