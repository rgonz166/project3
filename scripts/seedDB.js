require("dotenv").config();
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/vendorlist"
);

const bookSeed = [
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "The Tacos",
    owner: "Bob Dylan",
    ownderId: "auth0|lkdfsnofw99392",
    categories: ["Tacos", "Fancy"],
    hashtags: ["#tacotuesday","#tacos"],
    closingTime: "6pm"
  },
  {
    storeName: "Tacos-r-us",
    owner: "Pocho Chocho",
    ownderId: "auth0|291083nkj21",
    categories: ["Tacos", "Chicano", "TJ"],
    closingTime: "8pm"
  },
  {
    storeName: "Los 3 Tacos",
    owner: "Raul Gonzalez",
    ownderId: "auth0|lkjs9we89dsa",
    categories: ["Tacos", "Mexican", "TJ", "Cheap"],
    hashtags: ["#lostacos","#tacos", "#tjtacos"],
    closingTime: "1am"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Chicano Soul Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownderId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  }
];

db.Vendor
  .remove({})
  .then(() => db.Vendor.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
