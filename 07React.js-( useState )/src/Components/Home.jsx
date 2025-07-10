import React from "react";

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
