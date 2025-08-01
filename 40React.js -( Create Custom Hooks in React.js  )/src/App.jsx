import React from "react";
import "./App.css";
import useToggler from "./useToggle";
function App() {
  const { value, toggle } = useToggler(true);
  return (
    <>
      <button
        onClick={() => {
          toggle(!value);
        }}
      >
        Toggle
      </button>
      <button onClick={() => toggle(false)}>Hide</button>
      <button>show</button>

      {value ? <h1>Create Costom Hooks</h1> : null}
    </>
  );
}

export default App;
