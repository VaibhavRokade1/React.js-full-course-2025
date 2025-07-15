import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert(`Your name :${name} Your Password : ${password} Your Email ${email}`);
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>App</h1>

      <form action="#">
        <input
          type="text"
          placeholder="Enter a Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>&nbsp;
        <button onClick={handleClear}>Clear</button>
      </form>

      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </>
  );
}

export default App;
