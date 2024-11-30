import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from server (use your API endpoint)
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://your-server-url/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded-md shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-sm text-gray-600">{blog.content.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
