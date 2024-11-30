const blogModel = require("../models/blogModel");

module.exports.createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const user = req.id;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!image || !title || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const blog = await blogModel.create({
      title,
      title,
      content,
    });

    return res
      .status(200)
      .json({
        message: "Blog created successfully",
        success: true,
        blog: blog,
      });
  } catch (error) {
    console.log("Error creating blog : ", error.message);
  }
};
