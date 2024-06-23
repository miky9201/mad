import React from "react";
import "./section.css";
import Navbar from "../navbar/Navbar";

function Section({ children }) {
  return (
    <section id="section">
      <Navbar></Navbar>
      {children}
    </section>
  );
}

export default Section;
