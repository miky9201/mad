import React from "react";
import "./navbar.css";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="nav">
      <IconContext.Provider value={{ color: "black", size: "80%" }}>
        <div>
          <FiMenu />
        </div>
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
