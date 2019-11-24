import axios from "axios";

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
  // pushFood
};
