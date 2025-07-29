import React, { useState } from "react";
import "./App.css";
import User from "./User";
function App() {
  const [users, setUsers] = useState({
    name: "Vaibhav Rokade",
    address: {
      city: "Ahilyanager",
      state: "Maharashtra",
    },
  });

  return (
    <>
      <h1>Object Modification</h1>
      <input
        type="text"
        onChange={(e) => {
          setUsers({ ...users, name: e.target.value });
        }}
        value={users.name}
        placeholder="Name"
      />
      <input
        type="text"
        placeholder="city"
        onChange={(e) => {
          setUsers({
            ...users,
            address: { ...users.address, city: e.target.value },
          });
        }}
        value={users.address.city}
      />

      <input
        type="text"
        placeholder="State"
        onChange={(e) => {
          setUsers({
            ...users,
            address: { ...users.address, state: e.target.value },
          });
        }}
        value={users.address.state}
      />
      <User {...users} />
    </>
  );
}

export default App;
