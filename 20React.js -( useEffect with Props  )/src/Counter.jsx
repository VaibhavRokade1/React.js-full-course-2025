import React, { useEffect } from "react";
function Counter({ counter, data }) {
  const Display = () => {
    console.log("Display is working.");
  };

  useEffect(() => {
    Display();
  }, []);
  return (
    <>
      <h1>Counter Data</h1>
      <h2>{counter}</h2>
      <h2>{data}</h2>
    </>
  );
}

export default Counter;
