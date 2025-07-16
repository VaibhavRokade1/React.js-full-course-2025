import React from "react";
import "./App.css";
import Watch from "./Components/Watch";
import ChangeColor from "./ChangeColor";
import { useState } from "react";
function App() {
  const [color, setColor] = useState(0);
  return (
    <>
      <h1>Digital Watch</h1>
      <h3>Set Watch-Bg Color </h3>
      <select onChange={(e) => setColor(e.target.value)}>
        <option selected={true} disabled={true}>
          -- Select Color --
        </option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="skyblue">Sky</option>
      </select>
      <Watch color={color}/>
    </>
  );
}

export default App;
