import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Whether you're in the mood for a quick snack or a full-course meal,
          we've got something to satisfy every craving. Fast delivery, fresh
          ingredients, and flavors you'll love—just a few clicks away.
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
