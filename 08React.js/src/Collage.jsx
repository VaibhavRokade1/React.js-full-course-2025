import React from "react";
function Collage({ names }) {
  console.log(names);

  return (
    <>
      <h1>Collage Name {names[0].name}</h1>
    </>
  );
}

export default Collage;
