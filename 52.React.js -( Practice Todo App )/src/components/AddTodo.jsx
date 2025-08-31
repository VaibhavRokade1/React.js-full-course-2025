import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../fetures/todoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodos(input));
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Enter new task..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleAddTodo}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
