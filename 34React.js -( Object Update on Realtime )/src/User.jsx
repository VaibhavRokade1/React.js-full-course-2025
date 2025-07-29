import React, { useState } from "react";
function User({ name, address, state }) {
  return (
    <>
      <h2>Name : {name}</h2>
      <h2>City : {address.city}</h2>
      <h2>State: {address.state}</h2>
    </>
  );
}

export default User;
