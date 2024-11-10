const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: "string", required: true },
  status: { type: "string", required: true },
  author: String,
  createdAt: Number,
});

const todo = mongoose.model("Todo", todoSchema, "todoItems");

module.exports = todo;
