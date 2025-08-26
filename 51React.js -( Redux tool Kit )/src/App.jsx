import React from "react";
import { Provider } from "react-redux";
import { Store } from "./app/Store";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
function App() {
  return (
    <Provider store={Store}>
      <h1>Todo App</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
