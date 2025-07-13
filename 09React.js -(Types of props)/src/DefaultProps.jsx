import React from "react";
// Default props

function DefaultProps({ name = "GuestUser" }) {
  return (
    <>
      <h1>DefaultProps</h1>
      <h2>Name : {name}</h2>
    </>
  );
}

export default DefaultProps;
