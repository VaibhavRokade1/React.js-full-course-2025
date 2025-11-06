import React, { useContext } from "react";
import Compoenet2 from "./Compoenet2";
import DemoContext from "../Context/DemoContext";

const Compoenet1 = () => {
  const { name, email } = useContext(DemoContext);
  return (
    <div className="text-center border-2 border-emerald-200 p-5">
      <h1 className="">Compoenet1</h1>
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
      <Compoenet2 />
    </div>
  );
};

export default Compoenet1;
