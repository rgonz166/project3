require('dotenv').config();
var config = require('./config.js');
var Twit = require({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})
var T = new Twit(config);

export default {
    sendTweet: function (tweet) {
        T.post("statuses/update", { status: tweet }, function (err, data, response) {
            console.log("Tweeted")
        })
    }
}