const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: "string", required: true },
  status: { type: "string", required: true },
  author: String,
});

const todo = mongoose.model("Todo", todoSchema, "todoItems");

module.exports = todo;
