import React from "react";

function AddUser({ user, setUser }) {
  const handleUser = () => {
    setUser([user]);
  };
  return (
    <>
      <h1>Add User's</h1>
      <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <br />
      <button onClick={handleUser}>Add</button>
    </>
  );
}

export default AddUser;
