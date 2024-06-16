import React from "react";
import "../screenIntro/screenIntro.css";
import logoWhite from "../../assets/images/logo-white.png";

function ScreenIntro({ displayed }) {
  return (
    <section
      className={`fading-component ${displayed ? "fade-in" : "fade-out"}`}
      id="intro"
    >
      <img src={logoWhite} alt="logo-mad" />
    </section>
  );
}

export default ScreenIntro;
