// User.js
import React from "react";

export default function User({ id, name, email, phone }) {
  return (
    <>
      <div
        key={id}
        className="border p-4 rounded-lg shadow w-64 bg-white flex flex-col items-center"
      >
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{email}</p>
        <p className="text-sm text-gray-800">{phone}</p>
      </div>
    </>
  );
}
