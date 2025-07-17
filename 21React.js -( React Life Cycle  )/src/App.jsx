import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShowSomething from "./ShowSomething";

function App() {
  const [count, setCount] = useState(0);

  // mounting phase
  useEffect(() => {
    console.log("Mounting Phase Only....");
  }, []);

  // Update Phase
  useEffect(() => {
    console.log("Update Phase Only....");
  }, [count]);

  // unmounting
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    return () => {
      console.log("Unmounting Only....");
    };
  }, [display]);
  return (
    <>
      <h1>App</h1>
      <h2>React Life Cycile </h2>
      <ol>
        <li>Mounting</li>
        <li>{`Updating ---->> (ErrorHandling)`}</li>
        <li>Unmounting</li>
      </ol>

      <h1>Count {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle
      </button>

      {display ? <ShowSomething /> : ""}
    </>
  );
}

export default App;
