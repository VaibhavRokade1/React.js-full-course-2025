// Simple Function

// function User(props) {
//   return (
//     <>
//       <h2>User-Name : {props.name} </h2>
//     </>
//   );
// }

// props Distructure

import React from "react";

function User({ user, id }) {
  return (
    <>
      <h3>{id}</h3>
      <h2>User Name : {user.name}</h2>
      <h2>Age : {user.age}</h2>

      <hr />
    </>
  );
}

export default User;
