import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            MyApp
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-gray-700 hover:text-indigo-600 transition-colors ${
                  location.pathname === link.path
                    ? "font-semibold text-indigo-600"
                    : ""
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              to="/auth"
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sign In
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              location.pathname === link.path
                ? "font-semibold text-indigo-600"
                : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/auth"
          className="block mx-4 my-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition"
          onClick={() => setIsOpen(false)}
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
