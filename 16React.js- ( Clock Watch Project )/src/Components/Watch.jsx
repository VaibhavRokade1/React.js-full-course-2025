import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Watch({ color }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      let myDate = new Date();
      setTime(myDate.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h1 className="watch" style={{ color: color }}>
        {time}
      </h1>
    </>
  );
}

export default Watch;
