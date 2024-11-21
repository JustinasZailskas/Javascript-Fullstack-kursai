const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  token: String,
});

const user = mongoose.model("User", userSchema, "users");

module.exports = user;
