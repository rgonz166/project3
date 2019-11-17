const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  storeName: { type: String, required: true },
  owner: { type: String, required: true },
  ownerId: { type: String, required: true },
  menu: { type: Schema.Types.ObjectId, ref: "Menu" },
  categories: Array,
  hashtags: Array,
  location: String,
  status: { type: Boolean, default: false }, //False = closed ; True = open
  closingTime: String
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
