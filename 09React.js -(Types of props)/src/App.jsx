import React from "react";
import DefaultProps from "./DefaultProps";
import Wrapper from "./Wrapper";

function App() {
  let name = undefined;
  return (
    <>
      <h1>App</h1>
      {/* <DefaultProps name={name} /> */}

      <Wrapper>
        <h2>Wrapping text 1</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio neque
          architecto omnis, totam quas dolor ullam maiores nobis necessitatibus,
          porro adipisci ipsa modi, animi quo. Repudiandae est sed rerum
          architecto.
        </p>
      </Wrapper>
      <br />
      <Wrapper>
        <h2>Wrapping text 1</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio neque
          architecto omnis, totam quas dolor ullam maiores nobis necessitatibus,
          porro adipisci ipsa modi, animi quo. Repudiandae est sed rerum
          architecto.
        </p>
      </Wrapper>
    </>
  );
}

export default App;
