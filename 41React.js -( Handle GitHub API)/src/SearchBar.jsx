import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import useGithubUser from "./useGithubUser";
import Github from "./Github";

function SearchBar() {
  const { username, setUsername, pending, data, handleData } = useGithubUser();

  const onSubmit = (e) => {
    e.preventDefault();
    if (username) handleData();
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row gap-4 mb-6 w-full"
      >
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
          placeholder="Enter GitHub username"
          className="px-5 py-3 w-full rounded-xl bg-white border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800 transition duration-300"
        />
        <button
          disabled={pending}
          className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-3 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold hover:cursor-pointer"
        >
          {pending ? "Searching..." : "Search"}
        </button>
      </form>

      {/* GitHub User Card */}
      <Github {...data} />
    </>
  );
}

export default SearchBar;
