const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
  book_id: { type: Schema.Types.ObjectId, ref: "books" },
  text: { type: Schema.Types.String, required: true },
  chapter_thought: { type: Schema.Types.String, required: true },
  comments: { type: Schema.Types.String },
  emoji: { type: Schema.Types.Number },
});

module.exports = Chapter = mongoose.model("chapters", ChapterSchema);
