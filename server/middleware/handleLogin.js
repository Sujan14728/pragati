const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const foundUser = await User.findOne({ email: email });
  if (!foundUser) return res.sendStatus(401);
  //   console.log(hpassword);
  const match = await bcrypt.compare(password, foundUser.password);
  console.log(match);
  if (match) {
    if (foundUser.isLogin == false) {
      const options = { upsert: true };

      const updateLogin = {
        $set: {
          isLogin: true,
        },
      };
      const result = await User.updateOne(foundUser, updateLogin, options);
    }
    console.log("matched");
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = handleLogin;
