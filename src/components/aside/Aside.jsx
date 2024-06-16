import React from "react";
import "./aside.css";
import Socials from "../socials/Socials";
import logo from "../../assets/images/logo.png";

function Aside() {
  return (
    <aside className="aside">
      <img src={logo} alt="logo-mad" />
      <Socials></Socials>
    </aside>
  );
}

export default Aside;
