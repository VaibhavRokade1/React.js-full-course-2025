import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  return (
    <>
      <h1>useState with useEffect handle props side effects </h1>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Data {data}
      </button>

      <Counter counter={counter} data={data} />
    </>
  );
}

export default App;
