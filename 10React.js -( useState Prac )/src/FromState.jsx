import React from "react";
import { useState } from "react";
function FromState() {
  // get data from the input box

  const [value, setValue] = useState("");

  return (
    <>
      <h1>Display Input Data : </h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Type there"
      />

      <button
        onClick={() => {
          setValue("");
        }}
      >
        clear data
      </button>
      <h3>{value}</h3>
    </>
  );
}
export default FromState;
