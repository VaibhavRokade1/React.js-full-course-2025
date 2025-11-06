import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

const Increment = () => {
  const { Count, setCount } = useContext(CounterContext);
  return (
    <div>
      <button type="button" onClick={() => setCount(Count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Increment;
