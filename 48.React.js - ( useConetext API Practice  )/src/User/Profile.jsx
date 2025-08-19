import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user, password } = useContext(UserContext);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Profile Page
      </h2>

      {/* Name Display */}
      <h2 className="text-lg text-gray-700 mb-4">
        <span className="font-semibold">Name: {user?.username}</span>
      </h2>

      {/* Password Display */}
      <h2 className="text-lg text-gray-700 mb-6">
        <span className="font-semibold">Password: {password?.pass} </span>
      </h2>

      {/* Update Button (optional) */}
      <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
        Update Profile
      </button>
    </div>
  );
}

export default Profile;
