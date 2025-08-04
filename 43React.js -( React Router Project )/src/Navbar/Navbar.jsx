import React from "react";
import { Bell, Settings, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-green-100 shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-800 tracking-wide">
        AgriGrow 🌾
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-green-900 font-medium text-sm">
        <a href="/" className="hover:text-green-700 transition duration-200">
          Home
        </a>
        <a
          href="/about"
          className="hover:text-green-700 transition duration-200"
        >
          About
        </a>
        <a
          href="/services"
          className="hover:text-green-700 transition duration-200"
        >
          Services
        </a>
        <a
          href="/contact"
          className="hover:text-green-700 transition duration-200"
        >
          Contact
        </a>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-green-800">
        <button className="p-2 rounded-full hover:bg-green-200 transition">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-green-200 transition">
          <Settings size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-green-200 transition">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
