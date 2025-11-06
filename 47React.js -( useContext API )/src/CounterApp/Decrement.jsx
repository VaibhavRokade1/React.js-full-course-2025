import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

const Decrement = () => {
  const { Count, setCount } = useContext(CounterContext);
  return (
    <div>
      <button type="button" onClick={() => setCount(Count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Decrement;
