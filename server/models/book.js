import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      shortDescription: String,
      author: String,
      tags: [String],
      file: String,
      likeCount: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("book", bookSchema);

export default Book;
