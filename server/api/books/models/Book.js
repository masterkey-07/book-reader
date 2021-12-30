const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  book_name: { type: Schema.Types.String, required: true },
  book_summary: { type: Schema.Types.String, required: true },
});

module.exports = Book = mongoose.model("books", BookSchema);
