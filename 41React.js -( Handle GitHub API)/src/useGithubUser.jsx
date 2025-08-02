import React, { useState } from "react";

function useGithubUser() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);

  const handleData = () => {
    try {
      setPending(true);
      setTimeout(async () => {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok)
          throw new Error("Responce Error :dataomething went wrong...!");

        const data = await res.json();

        setData(data ?? null);

        setPending(false);
      }, 2000);
    } catch (err) {
      console.log("Invalid API :" + err);
    }
  };

  return { username, setUsername, pending, data, handleData };
}

export default useGithubUser;
