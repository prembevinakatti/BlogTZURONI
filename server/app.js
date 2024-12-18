const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();
const authRoute = require("./routes/authRoute");
const blogRoute = require("./routes/blogRoute");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOrigin = {
  origin: "https://blogtzuroni-demo.onrender.com",
  credentials: true,
};
app.use(cors(corsOrigin));

app.use("/api/auth", authRoute);
app.use("/api/posts", blogRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connectDB();
  console.log(`LISTENING ON PORT ${PORT}`);
});
