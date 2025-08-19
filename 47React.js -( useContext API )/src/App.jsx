import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./User/Login";
import Profile from "./User/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-center text-3xl font-bold">useContext API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
