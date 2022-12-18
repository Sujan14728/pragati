require("./config/db").connect();

const express = require("express");
const User = require("./models/user.model");

const app = express();

app.use(express.json());
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const userRouter = require("./routes/user.routes");
app.use("/api/", userRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`server connected at port ${port}`);
});
