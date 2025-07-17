import React, { useState } from "react";

function Checkbox() {
  const [Skills, setSklils] = useState([]);

  const handleSkills = (e) => {
    if (e.target.checked) {
      setSklils([...Skills, e.target.value]);
    } else {
      console.log(Skills);
      setSklils([...Skills.filter((elemt) => elemt != e.target.value)]);
    }
  };
  return (
    <>
      <h1>Manipulate Checked box Data </h1>

      <input type="checkbox" id="php" value={"PHP"} onChange={handleSkills} />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input type="checkbox" id="java" value={"JAVA"} onChange={handleSkills} />
      <label htmlFor="java">JAVA</label>
      <br />
      <br />
      <input type="checkbox" id="js" value={"JS"} onChange={handleSkills} />
      <label htmlFor="js">JS</label>

      <hr />
      <h3>Skils : {Skills.toString()}</h3>
    </>
  );
}

export default Checkbox;
