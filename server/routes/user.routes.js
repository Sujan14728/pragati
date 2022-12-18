const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const User = require("../models/user.model");
const Course = require("../models/course.model");
const handleLogin = require("../middleware/handleLogin");

router.get("/user", (req, res) => {
  res.send("this is user api section");
});

router.post("/user/newuser", async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const hashedpassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      fname,
      lname,
      email,
      password: hashedpassword,
    });
    createUser.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

router.post("/user/userlogin", handleLogin, async (req, res) => {
  res.sendStatus(200);
});

router.get("/user/activeuser", async (req, res) => {
  const foundUser = await User.findOne({ isLogin: true });
  res.json(foundUser);
});

router.get("/user/logout/:id", async (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  const foundUser = await User.findOne({ _id: id });
  const options = { upsert: true };
  const updateLogin = {
    $set: {
      isLogin: false,
    },
  };
  const result = await User.updateOne(foundUser, updateLogin, options);
  res.redirect("/");
});

router.post("/user/course", async (req, res) => {
  const email = req.body.email;
  const course = req.body.course;

  console.log(course);
  console.log(email)

  const createCourse = new Course({
    email: email,
    course: course,
  });
  createCourse.save();
  res.sendStatus(200);
});

module.exports = router;
