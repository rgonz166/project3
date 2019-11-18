import axios from "axios";

export default {
  // Get User(Vendor)
  getVendor: function(id){
    return axios.get("/api/vendor/" + id);
  },
  // Gets all books
  getList: function() {
    return axios.get("/api/list");
  },
  // Gets the book with the given id
  getVendors: function() {
    return axios.get("/api/vendor");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
