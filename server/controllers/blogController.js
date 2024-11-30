const blogModel = require("../models/blogModel");

module.exports.createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!image || !title || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const blog = await blogModel.create({
      image,
      title,
      content,
    });

    return res.status(200).json({
      message: "Blog created successfully",
      success: true,
      blog: blog,
    });
  } catch (error) {
    console.log("Error creating blog : ", error.message);
  }
};

module.exports.getAllBlogs = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const blogs = await blogModel.find().sort({ createdAt: -1 });

    if (!blogs) {
      return res.status(404).json({ message: "No blogs found" });
    }

    return res.status(200).json({
      message: "All blogs fetched successfully",
      success: true,
      blogs: blogs,
    });
  } catch (error) {
    console.log("Error Getting all blog : ", error.message);
  }
};

module.exports.getBlogById = async (req, res) => {
  try {
    const user = req.user;
    const blogId = req.params.blogId;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!blogId) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }

    const blog = await blogModel.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({
      message: "Blog fetched successfully",
      success: true,
      blog: blog,
    });
  } catch (error) {
    console.log("Error Getting blog : ", error.message);
  }
};
