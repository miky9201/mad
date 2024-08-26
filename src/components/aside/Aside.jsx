import React from "react";
import "./aside.css";
import Socials from "../socials/Socials";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Aside({ children }) {
  return (
    <aside className="aside">
      <Link to="/">
        <img src={logo} alt="logo-mad" />
      </Link>
      {children}
      <Socials colorType="black" isAside></Socials>
    </aside>
  );
}

export default Aside;
