import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("Vaibhav Rokade");
  const [display, setDisplay] = useState(true);
  return (
    // What is hooks ?.
    // Hooks is a special functions lets you use state and other addtional fetures in react use inside the functional components

    <>
      <h1>React.js App</h1>
      <br />
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle
      </button>
      {display ? <h2>User : {userName}</h2> : null}
    </>
  );
}

export default App;
