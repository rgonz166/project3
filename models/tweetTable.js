const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  tweet: [{ type: Schema.Types.ObjectId, ref: "Tweet" }]
});

const TweetTable = mongoose.model("TweetTable", tableSchema);

module.exports = TweetTable;
