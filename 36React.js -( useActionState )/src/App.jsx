import React, { useActionState } from "react";

function App() {
  const handleFrom = async (previousData, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));

    if (!name && !password) {
      return {
        error: "All fileds are required...!!!",
        name,
        password,
      };
    } else {
      return { massage: "Data Send Successfully...!!", name, password };
    }
  };

  const [data, action, pending] = useActionState(handleFrom, undefined);

  return (
    <>
      <h1>useActionState Hook in React.js</h1>
      <form action={action}>
        <h2 style={{ color: "black" }}>From</h2>
        <input type="text" placeholder="Enter a name" name="name" />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter a password"
          name="password"
          autoComplete="true"
        />
        <br />
        <br />
        <button disabled={pending} style={{ marginBottom: "10px" }}>
          {pending ? "Submitting..." : "Submit"}
        </button>
        <br />
        {data?.massage && (
          <span style={{ color: "green" }}>{data?.massage}</span>
        )}
        {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      </form>

      <div className="data">
        <h1>Data</h1>

        <h2>Name : {data?.name} </h2>
        <h2>Password : {data?.password}</h2>
      </div>
    </>
  );
}

export default App;
