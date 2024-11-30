import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal"; 

const BlogCard = ({ image, title, description, blogId, author }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [fullBlog, setFullBlog] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const handleReadMoreClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/posts/getBlog/${blogId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setFullBlog(response.data.blog);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching full blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="max-w-xs xl:w-[30vw] border mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

        <p className="text-sm text-gray-600 capitalize mb-2">
          Author :- {author ? author.username : "Unknown Author"}
        </p>

        <p className="text-gray-600 text-sm">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>

        <button
          className="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={handleReadMoreClick}
          disabled={loading}
        >
          {loading ? "Loading..." : "Read More"}
        </button>
      </div>

      {isModalOpen && fullBlog && (
        <Modal
          title={fullBlog.title}
          content={fullBlog.content}
          image={fullBlog.image}
          author={fullBlog.author.username}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default BlogCard;
