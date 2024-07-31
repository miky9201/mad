import React from "react";
import "./logo.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img  id="logo" src={logo} alt="logo-mad" />
    </Link>
  );
}

export default Logo;
