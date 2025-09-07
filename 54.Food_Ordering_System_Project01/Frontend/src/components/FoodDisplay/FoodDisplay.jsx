import "./FoodDisplay.css";
import { useFoodList } from "../../Context/StoreContextProvider";
import Fooditem from "../FoodItem/Fooditem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useFoodList();

  const filterdDishes =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);
  return (
    <>
      <div className="food-display" id="food-display">
        <h2>
          Top dishes near you (
          <span style={{ color: "green" }}> {filterdDishes.length}</span> )
        </h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return <Fooditem key={index} {...item} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
