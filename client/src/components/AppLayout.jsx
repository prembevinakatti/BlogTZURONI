import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/home" className="font-bold hover:bg-blue-700 px-3  py-2 transition-all rounded-md text-lg">
            Home
          </Link>
          <Link to="/home/create-blog" className="font-bold hover:bg-blue-700 px-3  py-2 transition-all rounded-md text-lg">
            Create Blog
          </Link>
          <Link to="/home/dashboard" className="font-bold hover:bg-blue-700 px-3  py-2 transition-all rounded-md text-lg">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Render Nested Routes */}
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
