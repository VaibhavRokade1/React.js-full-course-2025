import React from "react";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const handleInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };
  return (
    <>
      <h1>useRef Hook - React.js</h1>
      <p>
        1) Use to manipulate targeted Element. <br /> 2) Use to store reference
        of the any Elements <br />
        3) syntax = let inputRef = useRef(null);
      </p>
      <input ref={inputRef} type="text" placeholder="Enter a Name" />
      <button onClick={handleInput}>Click Me</button>
    </>
  );
}

export default App;
