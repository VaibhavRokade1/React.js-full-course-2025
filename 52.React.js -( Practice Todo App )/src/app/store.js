import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../fetures/todoSlice";

export const store = configureStore({
  reducer: TodoReducer,
});
