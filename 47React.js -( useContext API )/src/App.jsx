import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
// import Login from "./User/Login";
// import Profile from "./User/Profile";
// import Compoenet1 from "./components/Compoenet1";
// import DemoContextProvider from "./Context/DemoContextProvider";
import CounterContextProvider from "./Context/CounterContextProvider";
import CounterApp from "./CounterApp/CounterApp";

function App() {
  return (
    <CounterContextProvider>
      <CounterApp />
    </CounterContextProvider>
  );
}

export default App;
