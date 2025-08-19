import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState();
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    alert("Data Send...");
    setUser({ username });
  };
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
