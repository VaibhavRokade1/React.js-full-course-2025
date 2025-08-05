import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-[100px] font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="bg-green-200 text-green-700 px-6 py-3 rounded-lg hover:bg-green-600  hover:text-white transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
