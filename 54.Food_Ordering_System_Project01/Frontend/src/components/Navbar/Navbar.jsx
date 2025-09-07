import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={assets.logo} alt="... Logo" className="logo" />

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile_app")}
          className={menu === "mobile_app" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </nav>
  );
}
