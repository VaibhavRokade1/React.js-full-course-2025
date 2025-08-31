import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos, updateTodos } from "../fetures/todoSlice";
import { FaEdit, FaSave } from "react-icons/fa";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setInput(todo.text);
  };

  const handleSave = (id) => {
    dispatch(updateTodos({ id, text: input }));
    setEditId(null);
  };
  return (
    <>
      <ul className="space-y-3">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-2 shadow-md border border-gray-700"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-indigo-500 rounded"
                />

                {editId === todo.id ? (
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className="w-[15rem] bg-inherit text-white outline-none border-gray-600 border-2 rounded-lg pl-1 p-1 d-none "
                  />
                ) : (
                  <span className="text-gray-200">{todo.text}</span>
                )}
              </div>

              <div className="flex gap-2">
                {editId == null ? (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="bg-indigo-500  text-center text-white items-center font-medium px-2 py-1 rounded-md hover:bg-indigo-600 transition text-sm"
                  >
                    <FaEdit />
                  </button>
                ) : (
                  <button
                    onClick={() => handleSave(todo.id)}
                    className="bg-indigo-500  text-center text-white items-center font-medium px-2 py-1 rounded-md hover:bg-indigo-600 transition text-sm"
                  >
                    <FaSave />
                  </button>
                )}

                <button
                  onClick={() => {
                    dispatch(removeTodos(todo));
                  }}
                  className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 transition text-sm"
                >
                  ✕
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
