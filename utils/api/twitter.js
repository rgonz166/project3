const router = require('express').Router();
const twitterController = require('../../controllers/twitterController');

// Matches with /twitter
router.route("/")
    .post(twitterController.postTweet);

module.exports = router;