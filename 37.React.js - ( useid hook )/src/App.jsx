import React, { useId } from "react";
import "./App.css";
function App() {
  const id = useId();
  const name = useId();

  return (
    <>
      <h1>useid Hook in React.js</h1>

      <label htmlFor={id}>Enter a id</label>
      <input id={id} type="text" />
      <br />
      <label htmlFor={name}>Enter a name</label>
      <input id={name} type="text" />
    </>
  );
}

export default App;
