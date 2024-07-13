import React from "react";
import "./aside.css";
import Socials from "../socials/Socials";
import logo from "../../assets/images/logo.png";

function Aside({ children }) {
  return (
    <aside className="aside">
      <img src={logo} alt="logo-mad" />
      {children}
      <Socials colorType="black"></Socials>
    </aside>
  );
}

export default Aside;
