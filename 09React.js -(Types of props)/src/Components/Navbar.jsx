import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-800 text-neutral-200 shadow-md shadow-sky-500/30">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-sky-400 cursor-pointer">
          MyApp
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          <li className="hover:text-sky-400 cursor-pointer">Home</li>
          <li className="hover:text-sky-400 cursor-pointer">About</li>
          <li className="hover:text-sky-400 cursor-pointer">Services</li>
          <li className="hover:text-sky-400 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-xl transition-colors">
          Login
        </button>
      </div>
    </nav>
  );
}
