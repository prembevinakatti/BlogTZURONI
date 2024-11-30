const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return res.status(403).json({ message: "Invalid Token" });
    }

    req.user = verified.id;
    next();
  } catch (error) {
    console.log("Error in Middleware : ", error.message);
  }
};

module.exports = isAuthenticated;
