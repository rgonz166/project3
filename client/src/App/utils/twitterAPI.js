var config = require('./twitterConfig');
var Twit = require("twit")
var T = new Twit(config);

export default {
    sendTweet: function (tweet) {
        T.post("statuses/update", { status: tweet }, function (err, data, response) {
            console.log("Tweeted")
        })
    }
}