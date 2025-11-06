import React, { useContext } from "react";
import Compoenet5 from "./Compoenet5";
import DemoContext from "../Context/DemoContext";

const Compoenet4 = () => {
  const { name, email } = useContext(DemoContext);

  return (
    <div className="text-center  border-2 border-gray-800 p-5">
      <h1>Compoenet4</h1>
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
      <Compoenet5 />
    </div>
  );
};

export default Compoenet4;
