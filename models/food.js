const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true, default: 0.00 },
  description : String,
  popular : Boolean
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
