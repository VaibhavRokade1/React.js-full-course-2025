import React from "react";
import { StoreContext } from "./StoreContext";
import { food_list } from "../assets/frontend_assets/assets";
import { useContext } from "react";

function StoreContextProvider({ children }) {
  const ContextValue = {
    food_list,
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
