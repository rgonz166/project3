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
        console.log("Stuff to Post: ", req.body);
        T.post("statuses/update", { status: req.body.body }, function (err, data, response) {
            if (err) { throw err };
            console.log("data str");
            console.log(data.id_str);
            res.json(data);
        })
    },
    getTweet: function(req, res){
        console.log("Stuff to grab: ", req.params.id, req.body);
        T.get("statuses/show/:id", { id: req.params.id }, function( err, data, response){
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