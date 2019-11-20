const db = require("../models");

// Defining methods for the menuController
module.exports = {
  findAll: function (req, res) {
    db.Menu
      .find(req.query)
      .sort({ storeName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Menu
      .findById(req.params.id)
      .populate({
        path: 'food'
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Menu
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Menu
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Menu
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeFood: function (req, res) {
    console.log("Removing stuff:", req.body, req.params);
    db.Menu.findOneAndUpdate({ _id: req.params.id }, { $pull: { food: req.body._id } }, { new: true})
      .then(function(reply) {
        console.log("This is the replyyyy:", reply);
        res.json(reply);
      });
  }
};
