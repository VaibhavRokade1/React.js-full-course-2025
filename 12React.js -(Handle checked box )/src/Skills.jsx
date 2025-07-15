import React, { useState } from "react";

function Skills() {
  const [Skills, setSkills] = useState([]);

  const handleSkills = (e) => {
    console.log(e.target.value, e.target.checked);

    if (e.target.checked) {
      setSkills([...Skills, e.target.value]);
    } else {
      console.log(Skills.filter((item) => item != e.target.value));

      setSkills([...Skills.filter((item) => item != e.target.value)]);
    }

    // console.log(Skills); //This line shows OLD value becouse of a state updater function assign the value after complating the corrent function
  };

  return (
    <>
      <h2>Skills</h2>

      <input type="checkbox" id="js" value={"js"} onClick={handleSkills} />
      <label htmlFor="js">Javascript</label>
      <br />
      <br />
      <input type="checkbox" id="Java" value={"java"} onClick={handleSkills} />
      <label htmlFor="Java">Java</label>
      <br />
      <br />
      <input type="checkbox" id="node" value={"node"} onClick={handleSkills} />
      <label htmlFor="node">Node</label>
      <br />
      <br />
      <input type="checkbox" id="php" value={"php"} onClick={handleSkills} />
      <label htmlFor="php">php</label>

      <br />
      <br />

      <h3>Skills :{Skills.toString()}</h3>
    </>
  );
}

export default Skills;
