const db = require("../models");

// Defining methods for the menuController
module.exports = {
  findAll: function (req, res) {
    db.TweetTable
      .find(req.query)
      .sort({ storeName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.TweetTable
      .findById(req.params.id)
      .populate({
        path: 'tweet'
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.TweetTable
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("Attempting to update");
    console.log(req.params.id, req.body);
    db.TweetTable
      .findOneAndUpdate({ _id: req.params.id }, { $push: { tweet: req.body.string } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  remove: function (req, res) {
    db.TweetTable
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
