import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_cloudinary_preset");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload", formData);
      return response.data.secure_url; // Return the uploaded image URL
    } catch (err) {
      console.error("Error uploading image:", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = await handleImageUpload(image);
      if (!imageUrl) {
        alert("Failed to upload image.");
        return;
      }

      await axios.post("http://your-server-url/api/blogs", {
        title,
        content,
        image: imageUrl,
      });

      alert("Blog created successfully!");
    } catch (err) {
      console.error("Error creating blog:", err);
      alert("Failed to create blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <Button type="submit" className="w-full py-3 mt-4" disabled={loading}>
            {loading ? "Creating..." : "Create Blog"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
