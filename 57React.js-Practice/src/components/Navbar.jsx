import React from "react";
import "./Navbar.css";
import { ImSearch } from "react-icons/im";
export const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Techrel</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Porfolio</li>
          <li>Blog</li>
          <li>Elements</li>
        </ul>
        <div>
          <button type="submit">
            <ImSearch />
          </button>
        </div>
      </nav>
    </>
  );
};
