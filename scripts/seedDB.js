require("dotenv").config();
const mongoose = require("mongoose");
const Thing = mongoose.Types.ObjectId;
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/vendorlist"
);

console.log("TEST", Thing);

const vendorSeed = [
  {
    storeName: "Los Tacos",
    owner: "Jose Ruiz",
    ownerId: "auth0|u9fd8ur932uifeas2",
    menu: Thing("000000000000000000000001"),
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "The Tacos",
    owner: "Bob Dylan",
    menu: Thing("000000000000000000000002"),
    ownerId: "auth0|lkdfsnofw99392",
    categories: ["Tacos", "Fancy"],
    hashtags: ["#tacotuesday","#tacos"],
    closingTime: "6pm"
  },
  {
    storeName: "Tacos-r-us",
    owner: "Pocho Chocho",
    ownerId: "auth0|291083nkj21",
    categories: ["Tacos", "Chicano", "TJ"],
    closingTime: "8pm"
  },
  {
    storeName: "Los 3 Tacos",
    owner: "Raul Gonzalez",
    menu: Thing("000000000000000000000003"),
    ownerId: "auth0|lkjs9we89dsa",
    categories: ["Tacos", "Mexican", "TJ", "Cheap"],
    hashtags: ["#lostacos","#tacos", "#tjtacos"],
    closingTime: "1am"
  },
  {
    storeName: "El Taquero",
    owner: "Ernesto Sanchez",
    ownerId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Mexican", "TJ"],
    hashtags: ["#lostacos","#tacos"],
    closingTime: "8pm"
  },
  {
    storeName: "Chicano Soul Tacos",
    owner: "Andres Ruiz",
    ownerId: "auth0|5dd0577c460ca50e25ac3769",
    menu: Thing("000000000000000000000003")
  },
  {
    storeName: "Tacos Veganos",
    owner: "Hanna Tefera",
    ownerId: "auth0|u9fd8ur932uifeas2",
    categories: ["Tacos", "Vegan", "Glutten-free"],
    hashtags: ["#vegantacos","#vegan", "#savetheworldandstopkillinganimalsplease"],
    closingTime: "8pm"
  },
  {
    storeName: "Tacos Ruly",
    owner: "Raul Gonzalez",
    ownerId: "auth0|5dd75fe0d8fdd50ed0133e4e",
    categories: ["Tacos","Mexican","CA"],
    customTweet: "This is my custom tweet",
    hashtags: ["#tacosruly","#besttacosintown"],
    closingTime: "10pm"
  }
];

const menuSeed = [
  {
    _id: Thing("000000000000000000000001"),
    menuName: "El Menu",
    food: [Thing("000000000000000000000001"), Thing("000000000000000000000002")]
  },
  {
    _id: Thing("000000000000000000000002"),
    menuName: "The Menu",
    food: [Thing("000000000000000000000003"), Thing("000000000000000000000004")]
  },
  {
    _id: Thing("000000000000000000000003"),
    menuName: "Echate Algo Guey",
    food: [Thing("000000000000000000000005"),Thing("000000000000000000000006"),Thing("000000000000000000000007")]
  }
];

const foodSeed = [
  {
    _id: Thing("000000000000000000000001"),
    foodName: "Quesadilla",
    price: 5.00,
    description: "It's cheese and tortilla."
  },
  {
    _id: Thing("000000000000000000000002"),
    foodName: "Flan",
    price: 3.00,
    description: "God's gift to earth."
  },
  {
    _id: Thing("000000000000000000000003"),
    foodName: "Tacos Veganos",
    price: 6.99
  },
  {
    _id: Thing("000000000000000000000004"),
    foodName: "Tacos De Pollo",
    price: 2.99
  },
  {
    _id: Thing("000000000000000000000005"),
    foodName: "Tacos Al Pastor",
    price: 2.99
  },
  {
    _id: Thing("000000000000000000000006"),
    foodName: "Tacos De Birria",
    price: 3.99
  },
  {
    _id: Thing("000000000000000000000007"),
    foodName: "Tacos De Buche",
    price: 2.99
  }
];

db.Vendor
  .remove({})
  .then(() => db.Vendor.collection.insertMany(vendorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  // Create Menu
  db.Menu
  .remove({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // Create Food
  db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
