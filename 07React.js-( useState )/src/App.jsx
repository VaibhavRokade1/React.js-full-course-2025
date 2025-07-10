import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React.js App</h1>
      <h2>Count : {count} </h2>
      <button
        onClick={() => {
          count < 10 ? setCount(count + 1) : alert("Maximum Limit is cross...");
        }}
      >
        incre (+)
      </button>
      &nbsp;
      <button
        onClick={() => {
          count > 0 ? setCount(count - 1) : alert("Minimum Limit is cross...");
        }}
      >
        incre (-)
      </button>
    </>
  );
}

export default App;
