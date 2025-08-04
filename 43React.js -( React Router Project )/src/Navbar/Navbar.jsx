import React from "react";
import { Bell, Settings, User } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-50 to-green-100 px-6 md:px-24 py-4 flex items-center justify-between shadow-xl z-[50] relative">
      {/* Logo */}
      <div className="text-3xl font-extrabold text-green-800 tracking-wide">
        AgriGrow 🌾
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 text-green-900 font-medium text-base">
        <Link to="/" className="hover:text-green-700 transition duration-300">
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-green-700 transition duration-300"
        >
          About
        </Link>
        <Link
          to="/services"
          className="hover:text-green-700 transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="hover:text-green-700 transition duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-green-800">
        <button className="p-2 rounded-full hover:bg-green-200 transition duration-300 shadow-md">
          <Bell size={22} />
        </button>
        <button className="p-2 rounded-full hover:bg-green-200 transition duration-300 shadow-md">
          <Settings size={22} />
        </button>
        <button className="p-2 rounded-full hover:bg-green-200 transition duration-300 shadow-md">
          <User size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
