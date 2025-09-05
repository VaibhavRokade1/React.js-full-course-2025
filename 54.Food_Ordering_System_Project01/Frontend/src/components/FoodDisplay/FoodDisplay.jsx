import React from "react";
import "./FoodDisplay.css";
import { useFoodList } from "../../Context/StoreContextProvider";
import Fooditem from "../FoodItem/Fooditem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useFoodList();
  return (
    <>
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            return <Fooditem key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
