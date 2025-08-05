import React from "react";
import { NavLink, Outlet } from "react-router";

function Services() {
  return (
    <>
      <div className="section">
        <h1>All Services</h1>
        <NavLink to={"services1"}>Services1</NavLink>
        <NavLink to={"services2"}>Services2</NavLink>
        <NavLink to={"services3"}>Services3</NavLink>

        <Outlet />
      </div>
    </>
  );
}

export default Services;
