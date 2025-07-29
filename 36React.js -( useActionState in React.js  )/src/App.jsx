import React from "react";
import { useFormStatus } from "react-dom";
import "./App.css";
function App() {
  const { panding } = useFormStatus();
  return (
    <>
      <h1>useActionState in React.js</h1>
      <form action="" method="get">
        <input type="text" placeholder="Enter name" name="name" />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          autoComplete="true"
        />
        <br />
        <br />
        <button onClick={panding}>Submit</button>
      </form>
    </>
  );
}

export default App;
