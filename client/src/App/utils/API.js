import axios from "axios";

export default {
  // TESTING
  getList: function() {
    return axios.get("/api/list");
  },
  // Get User(Vendor)
  getVendor: function(id){
    return axios.get("/api/vendor/" + id);
  },
  // Gets every vendor
  getVendors: function() {
    return axios.get("/api/vendor");
  },
  // Gets specific Menu
  getMenu: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
