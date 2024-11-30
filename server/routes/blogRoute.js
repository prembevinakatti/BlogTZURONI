const express = require("express");
const isAuthenticated = require("../middleware/isAuthenticated");
const { createBlog, getAllBlogs, getBlogById } = require("../controllers/blogController");

const router = express.Router();

router.route("/createBlog").post(isAuthenticated, createBlog);
router.route("/getAllBlogs").get(isAuthenticated, getAllBlogs);
router.route("/getBlog/:blogId").get(isAuthenticated, getBlogById);

module.exports = router;
