const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB : ", error.message);
      });
  } catch (error) {
    console.log("Error connecting to MongoDB : ", error.message);
  }
};

module.exports = connectDB;
