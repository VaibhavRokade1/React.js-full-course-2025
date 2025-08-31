import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-6 w-full max-w-md">
          {/* Header */}

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">🗂️ Todo List</h1>
          </div>

          {/* Input */}
          <AddTodo />

          {/* List */}
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
