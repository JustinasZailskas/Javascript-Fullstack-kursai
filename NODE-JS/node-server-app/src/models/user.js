const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin", "manager"],
    default: "user",
  },
  permissions: [
    {
      type: String,
    },
  ],
});

const user = mongoose.model("User", userSchema, "users");

module.exports = user;
