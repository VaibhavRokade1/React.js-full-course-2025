import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Weak up at 5:00 AM " }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    updateTodos: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
    },

    removeTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodos, updateTodos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;
