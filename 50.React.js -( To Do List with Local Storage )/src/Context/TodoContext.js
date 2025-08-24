import { createContext, useContext } from "react";

// create todo context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Weak up at 5:00pm",
      completetd: true,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//create context provider
export const TodoContextProvider = TodoContext.Provider;

//creating custoum Hooks
export const useTodo = () => {
  return useContext(TodoContext);
};
