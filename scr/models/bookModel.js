const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

//*******************************[BookSchema-Created]*****************************//
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
    ISBN: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: [String],
      required: true,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    deletedAt: {
      type: Date,
      default: "",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    releasedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

//***********************[BookSchema-Connection Created]**************************//
module.exports = mongoose.model("Book", bookSchema);
