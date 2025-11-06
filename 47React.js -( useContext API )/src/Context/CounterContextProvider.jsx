import React, { useState } from "react";
import CounterContext from "./CounterContext";

const CounterContextProvider = ({ children }) => {
  const [Count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ Count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
