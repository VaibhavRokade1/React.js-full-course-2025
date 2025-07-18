import React, { useState } from "react";

const App = () => {
  const [style, setStyle] = useState({
    width: "200px",
    borderRadius: "10px",
    padding: "10px",
  });

  const handleTheme = (bgColor, textColor) => {
    setStyle({ ...style, backgroundColor: bgColor, color: textColor });
  };
  return (
    <>
      {/* <h1>Types of Style in React.js</h1>
      <ul>
        <li>inline</li>
        <li>internal</li>
        <li>CSS</li>
        <li>Styled Components</li>
        <li>External Css Library/Framework</li>
      </ul> */}

      <h1>Dynamic style and conditional style</h1>

      <button
        onClick={() => {
          handleTheme("gray", "skyblue");
        }}
      >
        Dark Theme
      </button>
      <button
        onClick={() => {
          handleTheme("white", "black");
        }}
      >
        Default Theme
      </button>

      <div className="card" style={style}>
        <img
          src="https://avatars.githubusercontent.com/u/139482665?v=4"
          alt=""
          height={"200px"}
          width={"200px"}
          style={{
            borderRadius: "10px",
          }}
        />
        <h2>Vaibhav Rokade</h2>
      </div>
    </>
  );
};

export default App;
