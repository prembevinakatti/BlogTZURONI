import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { authUser } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        `https://blogtzuroni.onrender.com/api/auth/logoutAccount`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Error logging out", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/home"
            className="font-bold hover:bg-blue-700 px-3 py-2 transition-all rounded-md text-lg"
          >
            Home
          </Link>
          <Link
            to="/home/create-blog"
            className="font-bold hover:bg-blue-700 px-3 py-2 transition-all rounded-md text-lg"
          >
            Create Blog
          </Link>
          <button
            onClick={toggleDrawer}
            className="font-bold hover:bg-blue-700 px-3 py-2 transition-all rounded-md text-lg"
          >
            Menu
          </button>
        </div>
      </nav>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-72 bg-white p-6 shadow-lg transition-all">
            <button
              onClick={toggleDrawer}
              className="text-gray-600 hover:text-gray-800 mb-4 text-xl"
            >
              &times;
            </button>

            <div className="w-full h-full flex items-center justify-between flex-col">
              <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  User Info
                </h3>
                <p className="text-gray-600 text-sm">
                  <strong>Username:</strong> {authUser.username}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Email:</strong> {authUser.email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="w-full mb-10 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
