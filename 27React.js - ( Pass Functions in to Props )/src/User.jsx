import React from "react";

// Function distrcturing
function User({ handleName, name }) {
  return (
    <>
      <button
        onClick={() => {
          handleName(name);
        }}
      >
        Display Name
      </button>
    </>
  );
}

export default User;
