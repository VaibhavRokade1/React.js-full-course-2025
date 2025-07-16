import React from "react";
import { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("");

  return (
    <>
      <h3>Set Watch-Bg Color </h3>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">RED</option>
        <option value="yellow">Yellow</option>
        <option value="skyblue">Sky</option>
      </select>
    </>
  );
}

export default ChangeColor;
