import { useEffect, useState } from "react";
import axios from "axios";

const useGetAllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://blogtzuroni.onrender.com/api/posts/getAllBlogs",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching all blogs:", error);
        setError(error.response?.data?.message || "Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

export default useGetAllBlogs;
