import React from "react";
import { FaHome, FaInfoCircle, FaPhone, FaServicestack } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-slate-900 text-white shadow-xl p-6 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-teal-400 mb-10 tracking-wide">
            GitDash
          </h2>
          <nav className="space-y-6 text-base font-medium">
            <a
              href="#"
              className="flex items-center gap-3 hover:text-teal-400 transition-all duration-200"
            >
              <FaHome /> Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:text-teal-400 transition-all duration-200"
            >
              <FaInfoCircle /> About
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:text-teal-400 transition-all duration-200"
            >
              <FaServicestack /> Services
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:text-teal-400 transition-all duration-200"
            >
              <FaPhone /> Contact
            </a>
          </nav>
        </div>
        <footer className="text-xs text-slate-400 mt-10">
          © 2025 GitDash. All rights reserved.
        </footer>
      </aside>
    </>
  );
}

export default Sidebar;
