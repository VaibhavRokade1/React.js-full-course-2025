import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const { setUser } = useContext(UserContext);
  const { setPassword } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username });
    setPassword({ pass });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg w-96"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Login
      </h2>

      {/* Username */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
