import React from "react";

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Web developer passionate about creating user-friendly applications.",
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">User Profile</h2>
      <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">
            <strong>Name:</strong> {user.name}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">
            <strong>Bio:</strong> {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
