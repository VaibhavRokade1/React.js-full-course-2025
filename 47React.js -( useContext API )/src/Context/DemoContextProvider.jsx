import React, { useState } from "react";
import DemoContext from "./DemoContext";

const DemoContextProvider = ({ children }) => {
  const [name, setName] = useState("vaibhav");
  const [email, setEmail] = useState("vaibhavrokade04@gamil.com");

  return (
    <DemoContext.Provider value={{ name, email, setName, setEmail }}>
      {children}
    </DemoContext.Provider>
  );
};

export default DemoContextProvider;
