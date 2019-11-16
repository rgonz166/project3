const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  menuName: { type: String, required: true },
  food: { type: Array, default: [] },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
