import React, { useState } from "react";
import "./navbar.css";
import Socials from "../socials/Socials";
import logoWhite from "../../assets/images/logo-white.png";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

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
          <img src={logoWhite} alt="logo white mad" />
        </div>
        <div className="inner-nav">
          <div className="nav-items" onClick={handleNavElements}>
            <Link to="/agence">
              <h1>AGENCE |</h1>
            </Link>
            <Link to="/projet">
              <h1>PROJETS |</h1>
            </Link>
            <Link to="/missions">
              <h1>NOS MISSIONS |</h1>
            </Link>
            <Link to="/esprit">
              <h1>ESPRIT</h1>
            </Link>
            {/* <Link to="/">
              <h1>CONTACT |</h1>{" "}
            </Link>
            <Link to="/">
              <h1>NOUS REJOINDRE</h1>{" "}
            </Link> */}
          </div>
        </div>

        <Socials colorType={"white"}></Socials>

        <IconContext.Provider value={{ className: "chevron", color: "white" }}>
          <div onClick={handleNavElements}>
            <BsChevronUp />
          </div>
        </IconContext.Provider>
      </div>

      <div onClick={handleNavElements}>
        {toggle ? (
          <IconContext.Provider value={{ color: "white", size: "80%" }}>
            <RxCross1 />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ color: "black", size: "80%" }}>
            <FiMenu />
          </IconContext.Provider>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
