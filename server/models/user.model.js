const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: { type: String },
  isLogin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
