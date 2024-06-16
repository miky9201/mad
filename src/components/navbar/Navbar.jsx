import React, { useState } from "react";
import "./navbar.css";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleNavElements = async () => {
    setToggle(!toggle);
  };

  return (
    <nav className="nav">
      <IconContext.Provider value={{ color: "black", size: "80%" }}>
        <div onClick={handleNavElements}>
          <FiMenu />
        </div>

        <div
          className={`navbar fading-component ${
            toggle ? "fade-in" : "fade-out"
          }`}
        >
          <div onClick={handleNavElements}>
            <RxCross1 />
          </div>
        </div>
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
