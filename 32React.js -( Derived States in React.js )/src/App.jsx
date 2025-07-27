import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleUser = () => {
    setUsers([...users, user]);
  };

  const total = users.length;
  const last = users[users.length - 1];
  let unique = [...new Set(users)].length;
  return (
    <>
      <h1>Derived State</h1>

      <h3>Total Users : {total}</h3>
      <h3>Last User : {last}</h3>
      <h3>Unique Users : {unique}</h3>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter User Name"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button onClick={handleUser}>Add User </button>

      {users.map((index, item) => {
        return <h3 key={item}>{index}</h3>;
      })}
    </>
  );
}

export default App;
