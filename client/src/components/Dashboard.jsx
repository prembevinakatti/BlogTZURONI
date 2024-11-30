import React from "react";
import { useSelector } from "react-redux";
import { FaUserAlt, FaEnvelope } from "react-icons/fa"; 

const Dashboard = () => {
  const { authUser } = useSelector((store) => store.auth);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">User Profile</h2>
      <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex justify-center items-center text-3xl text-blue-500">
            <FaUserAlt />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">{authUser.username}</p>
            <p className="text-sm text-gray-500">Username</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex justify-center items-center text-3xl text-green-500">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">{authUser.email}</p>
            <p className="text-sm text-gray-500">Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
