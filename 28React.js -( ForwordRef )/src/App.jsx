import React, { useRef } from "react";
import User from "./User";

function App() {
  const inputREF = useRef(null);
  const handleInput = () => {
    inputREF.current.value = 384;
    inputREF.current.focus();
    inputREF.current.style.color = "red";
  };
  return (
    <>
      <h1>Forword Ref Using useRef </h1>
      <User ref={inputREF} />
      <button onClick={handleInput}>Click Me</button>
    </>
  );
}

export default App;
