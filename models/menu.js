const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  menuName: { type: String, required: true },
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }]
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
