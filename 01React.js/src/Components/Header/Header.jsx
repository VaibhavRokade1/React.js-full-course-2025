import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">BrandX</h1>

        {/* Hamburger Toggle (Mobile Only) */}
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="text-2xl text-gray-700 cursor-pointer"
          >
            <FaBars />
          </label>

          {/* Mobile Menu */}
          <div className="absolute top-[68px] left-0 w-full bg-white border-t border-gray-200 peer-checked:block hidden peer-checked:flex flex-col items-center gap-6 py-6 shadow-md transition-all duration-300 md:hidden">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-gray-700 text-lg font-medium">
          <a href="#" className="hover:text-purple-600 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
