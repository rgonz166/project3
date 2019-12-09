// add twitter id to vendor object
const db = require("../models");
var Twit = require('twit');
var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

module.exports = {
    postTweet: function (req, res) {
        console.log("Stuff to Post: ", req.body);
        T.post("statuses/update", { status: req.body.body }, function (err, data, response) {
            if (err) { throw err };
            console.log("data str");
            console.log(data.id_str);
            const tweetObj = {
                tweetId: data.id_str,
                body: data.text,
                createdAt: data.created_at
            }
            db.Tweet.create(tweetObj)
                .then(reply => {
                    console.log("Created new Tweet to Tweet Collection", reply);
                    res.json(reply);
                })
                .catch(err=>{
                    console.log(err);
                    res.json(err);
                })
        })
    },
    getTweet: function (req, res) {
        console.log("Stuff to grab: ", req.params.id, req.body);
        T.get("statuses/show/:id", { id: req.params.id }, function (err, data, response) {
            if (err) throw err;
            const importantStuff = {
                text: data.text,
                favorites: data.favorite_count,
                retweets: data.retweet_count
            }
            res.json(importantStuff);
        })
    }
}