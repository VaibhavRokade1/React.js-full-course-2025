import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useFoodList } from "../../Context/StoreContextProvider";

const Fooditem = ({ _id, name, price, description, image }) => {
  const { cartItems, removeFromCart, addToCart } = useFoodList();

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt="..." />
      </div>
      {!cartItems[_id] ? (
        <img
          className="add"
          onClick={() => addToCart(_id)}
          src={assets.add_icon_white}
          alt="..."
        />
      ) : (
        <div className="food-item-counter">
          <img
            onClick={() => removeFromCart(_id)}
            src={assets.remove_icon_red}
            alt=""
          />
          <p>{cartItems[_id]}</p>
          <img
            onClick={() => addToCart(_id)}
            src={assets.add_icon_green}
            alt="+"
          />
        </div>
      )}
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
