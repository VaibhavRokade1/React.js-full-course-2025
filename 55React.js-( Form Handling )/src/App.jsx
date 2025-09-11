import { useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import DisplayUsers from "./Components/DisplayUsers";

function App() {
  return (
    <>
      <div className="flex">
        <UserForm />
        <DisplayUsers />
      </div>
    </>
  );
}

export default App;
