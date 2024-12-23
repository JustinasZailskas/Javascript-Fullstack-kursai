const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: "string", required: true },
  description: String,
  status: { type: "string", required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  createdAt: Date,
});

const todo = mongoose.model("Todo", todoSchema, "todoItems");

module.exports = todo;
