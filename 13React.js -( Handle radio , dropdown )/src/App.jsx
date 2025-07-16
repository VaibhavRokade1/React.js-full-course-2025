import React, { useState } from "react";

function App() {
  const [gender, setGender] = useState("male");
  const [selectBox, setSelectBox] = useState("");
  const handleSelect = (e) => {
    setSelectBox(e.target.value);
  };

  return (
    <>
      <h1>Handle Redio BTN and dropdown</h1>

      <h3>Select Gender : {gender}</h3>
      <input
        type="radio"
        name="Gender"
        id="male"
        value={"male"}
        checked={gender === "male"}
        onClick={(e) => {
          setGender(e.target.value);
        }}
      />
      <label htmlFor="male">Male</label>
      <br />
      <br />
      <input
        type="radio"
        name="Gender"
        id="female"
        checked={gender === "female"}
        value={"female"}
        onClick={(e) => {
          setGender(e.target.value);
        }}
      />
      <label htmlFor="female">Female</label>
      <br />
      <hr />

      <h3>Select City : {selectBox} </h3>
      <select defaultValue={"Deli"} onChange={handleSelect}>
        <option>-- Select City --</option>
        <option value="Deli">Deli</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Rajasthan">Rejasthan</option>
      </select>
    </>
  );
}

export default App;
