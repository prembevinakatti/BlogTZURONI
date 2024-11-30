const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();
const authRoute = require("./routes/authRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connectDB();
  console.log(`LISTENING ON PORT ${PORT}`);
});
