const Book = require("../models/Book");

let books = new Array(3).fill(null).map(() => new Book());

books[0].fileBook = "public/uploads/test.html";

module.exports.books = books;
