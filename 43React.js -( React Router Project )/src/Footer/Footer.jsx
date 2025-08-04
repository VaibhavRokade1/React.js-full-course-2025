import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-green-900 py-12 px-6 md:px-5 mt-1">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            AgriGrow 🌿
          </h2>
          <p className="text-sm text-green-700">
            Helping farmers grow smarter with modern, tech-driven solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-green-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-600">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-600">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 73875 39006
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@agrigrow.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Aahilyanagar, Maharashtra
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">Follow Us</h3>
          <div className="flex gap-4 text-green-800">
            <a href="#" className="hover:text-green-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-green-600">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-green-600">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 text-sm text-green-700">
        © {new Date().getFullYear()} Vaibhav Rokade. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
