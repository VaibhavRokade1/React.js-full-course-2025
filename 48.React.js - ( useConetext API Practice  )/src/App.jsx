import React from "react";
import Login from "./User/Login";
import Profile from "./User/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-center text-3xl font-bold">App</h1> <br />
      <div className="flex justify-center gap-4">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
