// User.js
import React from "react";

export default function User({ user }) {
  return (
    <div className="border p-4 rounded-lg shadow w-64 bg-white flex flex-col items-center">
      <img
        src={user.image}
        alt={user.name}
        className="w-24 h-24 rounded-full object-cover mb-3"
      />
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-800">{user.city}</p>
    </div>
  );
}
