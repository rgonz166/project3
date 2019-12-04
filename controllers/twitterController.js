// add twitter id to vendor object
var Twit = require('twit');
var T = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

module.exports = {
    postTweet: function (req, res) {
        console.log("posted",req.body.body);
        T.post("statuses/update", { status: req.body.body }, function(err,data,response
        ) {
            console.log("Tweeted")
        })
    }
}