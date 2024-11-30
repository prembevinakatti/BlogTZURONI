import React from "react";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import BlogCard from "./Blog";

const Home = () => {
  const { blogs, loading, error } = useGetAllBlogs(); 

  if (loading) {
    return <div>Loading blogs...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id} 
            image={blog.image}
            title={blog.title}
            blogId={blog._id}
            author={blog.author}
            description={blog.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
