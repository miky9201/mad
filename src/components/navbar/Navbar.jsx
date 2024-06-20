import React, { useState } from "react";
import "./navbar.css";
import logoBlack from "../../assets/images/logo-black.png";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { BsChevronUp } from "react-icons/bs";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleNavElements = async () => {
    setToggle(!toggle);
  };

  return (
    <nav className="nav">
      <div
        className={`navbar fading-component ${toggle ? "fade-in" : "fade-out"}`}
      >
        <div className="inner-logo">
          <img src={logoBlack} alt="logo black mad" />
        </div>
        <div className="inner-nav">
          <div className="nav-items">
            <h1>AGENCE |</h1>
            <h1>PROJETS |</h1>
            <h1>NOS MISSIONS |</h1>
            <h1>ESPRIT |</h1>
            <h1>CONTACT |</h1>
            <h1>NOUS REJOINDRE</h1>
          </div>
        </div>

        <IconContext.Provider value={{ className: "chevron" }}>
          <div onClick={handleNavElements}>
            <BsChevronUp />
          </div>
        </IconContext.Provider>
      </div>
      <IconContext.Provider value={{ color: "black", size: "80%" }}>
        <div onClick={handleNavElements}>
          {toggle ? <RxCross1 /> : <FiMenu />}
        </div>
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
