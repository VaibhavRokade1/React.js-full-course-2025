import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("Vaibhav Rokade");
  const [display, setDisplay] = useState(true);
  return (
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
