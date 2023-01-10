import Book from "./model.js";

export default {
  findAllBooks() {
    return Book.findAll();
  },
};
