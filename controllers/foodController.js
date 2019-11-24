const db = require("../models");

// Defining methods for the vendorController
module.exports = {
  findAll: function (req, res) {
    db.Food
      .find(req.query)
      .sort({ storeName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Food
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Create Request: ", req.body);
    db.Food
      .create(req.body.obj)
      .then(dbModel => {
        console.log("Attempt", dbModel._id);
        db.Menu
          .findOneAndUpdate({ _id: req.body.menu }, { $push: { food: dbModel._id } })
          .then(reply => {
            console.log("This is a reply from Menu: ", reply);
            res.json(dbModel)
          })
          .catch(err => console.log("ERROR: ", err))
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Food
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    console.log("This is the request", req.params);
    db.Food
      .findById({ _id: req.params.obj })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
