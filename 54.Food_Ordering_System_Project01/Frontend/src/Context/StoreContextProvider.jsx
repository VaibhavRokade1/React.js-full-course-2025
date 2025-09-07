import React, { useEffect, useState } from "react";
import { StoreContext } from "./StoreContext";
import { food_list } from "../assets/frontend_assets/assets";
import { useContext } from "react";

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (_id) => {
    setCartItems((prev) => ({
      ...prev,
      [_id]: prev[_id] ? prev[_id] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const updatedCart = { ...prev };

      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }

      return updatedCart;
    });
  };

  const ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
}
export const useFoodList = () => {
  return useContext(StoreContext);
};

export default StoreContextProvider;
