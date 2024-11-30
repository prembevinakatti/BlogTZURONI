import React from "react";

const Modal = ({ title, content, image, onClose, author }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-3/4 md:w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute -top-1 right-2  rounded-full text-gray-700 text-2xl"
        >
          &times; 
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-800">{content}</p>
        <p className="text-gray-800 capitalize font-semibold mt-3">By -  {author}</p>
      </div>
    </div>
  );
};

export default Modal;
