import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

export const Counter = () => {
  const { Count } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter : {Count} </h1>
    </div>
  );
};
