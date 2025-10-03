import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">MyApp</h2>
            <p className="mt-2 text-gray-400">
              A modern React + Tailwind project with routing and responsive
              design.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Fullstack Apps</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                🌐
              </a>
              <a href="#" className="hover:text-blue-400">
                🐦
              </a>
              <a href="#" className="hover:text-blue-400">
                📸
              </a>
              <a href="#" className="hover:text-blue-400">
                💼
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
