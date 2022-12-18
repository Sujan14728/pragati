const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  course: { type: String },
});

module.exports = mongoose.model("Course", courseSchema);
