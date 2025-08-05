import React from "react";
import "./index.css";
import { Link } from "react-router";
function Navbar() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>
            <Link to={"/"} className="remove-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="remove-underline">
              About
            </Link>
          </li>
          <li>
            <Link to={"/services"} className="remove-underline">
              Services
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="remove-underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
