import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";

const Fooditem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt="..." />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="reting star.." />
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="food-item-price">&#8377;{price + 100}</div>
      </div>
    </div>
  );
};

export default Fooditem;
