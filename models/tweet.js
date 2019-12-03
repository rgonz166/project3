const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    body: { type: String, required: true },
    tweetId: { type: String, required: true }
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
