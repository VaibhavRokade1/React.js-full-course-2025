import React, { useState } from "react";
import AddUser from "./AddUser";
import "./App.css";
import DisplayUser from "./DisplayUser";
function App() {
  const [user, setUser] = useState([]);
  return (
    <>
      <AddUser setUser={setUser} user={user} />
      <DisplayUser DisplayUser={user} />
    </>
  );
}

export default App;
