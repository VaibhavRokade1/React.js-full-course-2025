import React from "react";

function Header() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-teal-500 to-violet-600 text-white rounded-xl shadow-xl p-6 mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          GitHub API Handler
        </h2>
        <p className="text-sm mt-1 text-teal-100">
          Explore beautifully styled public GitHub profiles.
        </p>
      </div>
    </>
  );
}

export default Header;
