import React from "react";
import "../screenIntro/screenIntro.css";
import logoWhite from "../../assets/images/logo-white.png";

function ScreenIntro({ displayed }) {
  return (
    <section
      className={displayed ? "fade-in" : "fade-out fading-component"}
      id="intro"
    >
      <img src={logoWhite} alt="logo-mad" />
    </section>
  );
}

export default ScreenIntro;
