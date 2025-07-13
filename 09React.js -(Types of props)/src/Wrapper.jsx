import React from "react";

// jsx pass using props

function Wrapper({ children }) {
  return (
    <>
      <div
        style={{
          color: "green",
          border: "2px solid red",
          padding: "1rem",
          width: "50%",
        }}
      >
        <h1>Hello Vaibhav i am wrapper component </h1>
        <div>
          <h1 style={{ color: "white" }}>Childrens props</h1>
        </div>
        {children}
      </div>
    </>
  );
}

export default Wrapper;
