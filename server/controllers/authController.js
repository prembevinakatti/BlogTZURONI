const authModel = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.createAccount = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!password === confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const exixtingUser = await authModel.findOne({ email: email });

    if (exixtingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await authModel.create({
      username,
      email,
      password,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { expiresIn: "1d" });

    res.status(201).json({
      message: "Account created successfully",
      success: true,
      user: user,
    });
  } catch (error) {
    console.log("Error creating account in server: ", error.message);
  }
};

module.exports.loginAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await authModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { expiresIn: "1d" });

    res.status(200).json({
      message: "Logged in successfully",
      success: true,
      user: user,
    });
  } catch (error) {
    console.log("Error Logging in server: ", error.message);
  }
};
