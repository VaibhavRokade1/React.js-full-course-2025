import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>🍅 Tomato</h2>
          <p>
            Fast, fresh, and delicious meals delivered right to your doorstep.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#offers">Offers</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-support">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>📍 Ahmednagar, Maharashtra</p>
          <p>📞 +91 73875 39006</p>
          <p>✉️ support@foodieexpress.com</p>
          <img
            src={assets.play_store}
            alt=""
            height={"40px"}
            style={{ marginTop: "1rem" }}
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FoodieExpress. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
