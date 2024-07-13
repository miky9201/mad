import React from "react";
import "../socials/socials.css";
import { IconContext } from "react-icons";
import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Socials({ colorType }) {
  return (
    <div className="social-media">
      <IconContext.Provider value={{ color: colorType, size: "90%" }}>
        <a
          href="https://www.instagram.com/mad_design_paris/"
          target="_blank"
          rel="noreferrer"
        >
          <CiInstagram />
        </a>
        <a href="sandra@mad-design.fr" target="_blank" rel="noreferrer">
          <CiMail />
        </a>
        <a href="https;//www.google.fr" target="_blank" rel="noreferrer">
          <CiLinkedin />
        </a>
      </IconContext.Provider>
    </div>
  );
}

export default Socials;
