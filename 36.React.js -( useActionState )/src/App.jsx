import React, { useActionState } from "react";

function App() {
  // in from data paramiter we can access all from Data
  const formHandler = async (previousData, FromData) => {
    const name = FromData.get("name");
    const password = FromData.get("password");

    await new Promise((res) => setTimeout(res, 2000));

    if (name && password) {
      return { massage: "Data Submited...!", name, password };
    } else {
      return {
        error: "Failed to send data...!",
        name,
        password,
      };
    }
  };

  const [data, action, pending] = useActionState(formHandler, undefined);

  return (
    <>
      <h1>useActionState in React.js</h1>
      <form action={action}>
        <input type="text" placeholder="Enter a name" name="name" />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter a Password"
          name="password"
          autoComplete="true"
        />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
        <br />
        {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
        {data?.massage && (
          <span style={{ color: "green" }}>{data?.massage}</span>
        )}
        <h1>Name : {data?.name}</h1>
        <h1>password : {data?.password}</h1>
      </form>
    </>
  );
}

export default App;
