const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  // process.env.MONGODB_URI ||
  "mongodb://localhost/vendorlist"
);

db.Menu.find({})
.populate("food")
.then(dbResult => {
    dbResult.forEach(content=>{
        console.log(`${content.menuName} has the following food items: ${content.food}`);
    });
    process.exit(0);
});