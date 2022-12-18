const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const { MONGO_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect("mongodb+srv://sujan:sujan123@cluster0.yvdwt.mongodb.net/App3DB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
