import React, { useState } from "react";
import "./App.css";
function App() {
  const [users, setUsers] = useState([
    "Vaibhav",
    "Vikas",
    "Aditya",
    "Parshant",
  ]);
  return (
    <>
      <h1>Update Array state in React.js</h1>

      <input
        type="text"
        placeholder="Change last value Array elmt"
        value={users[users.length - 1]}
        onChange={(e) => {
          users[users.length - 1] = e.target.value;
          setUsers([...users]);
        }}
      />
      <hr />
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h2>{user}</h2>
          </div>
        );
      })}
    </>
  );
}

export default App;
