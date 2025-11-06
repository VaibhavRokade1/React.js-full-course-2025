import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import { Counter } from "./Counter";

const CounterApp = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold p-5">CounterApp</h1>
      <div className="flex gap-10 justify-center">
        <Decrement />
        <Counter />
        <Increment />
      </div>
    </div>
  );
};

export default CounterApp;
