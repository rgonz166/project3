import axios from "axios";
import mongoose from 'mongoose';
const ObjId = mongoose.Types.ObjectId;

export default {
  // Get User(Vendor)
  getVendor: function (id) {
    return axios.get("/api/vendor/" + id);
  },
  // Gets every vendor
  getVendors: function () {
    return axios.get("/api/vendor");
  },
  // Gets specific Menu
  getMenu: function (id) {
    return axios.get("/api/menu/" + id);
  },
  // Removes Reference of Food from Menu
  removeFood: function (object) {
    return axios.put("/api/menu/" + object.id, { _id: object.foodId });
  },
  // Deletes Food from Food document
  deleteFood: function (foodId) {
    return axios.delete("/api/food/" + foodId);
  },
  // Saves a book to the database
  createFood: function (foodObj, menuRef) {
    const createdFood = { obj: foodObj, menu: menuRef };
    return axios.post("/api/food/", createdFood);
  },
  // Create Menu
  createMenu: function (obj){
    return axios.post("/api/menu/", obj);
  },
  createVendor: function(obj){
    console.log(`Menu is ${obj['menu']} and type of ${typeof(obj['menu'])}`);
    obj['menu'] = ObjId(obj['menu']);
    console.log(`Menu is ${obj['menu']} and type of ${typeof(obj['menu'])}`);
    console.log("ObjectId'd the menu ref: ", obj);
    return axios.post("/api/vendor/", obj);
  },
  // Update vendor info
  updateVendor: function (object) {
    let body = {

      owner: object.owner,
      storeName: object.storeName,
      city: object.city,
      state: object.state,
      categories: object.categories
    }
    console.log(body);
    return axios.put("/api/vendor/" + object.id, body);
  }
};
