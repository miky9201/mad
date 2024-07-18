import React from "react";
import "./section.css";
import Navbar from "../navbar/Navbar";
import Agence from "../agence/Agence.jsx";
import Missions from "../missions/Missions.jsx";
import Esprit from "../esprit/Esprit.jsx";
import { Routes, Route, useLocation } from "react-router-dom";

function Section() {
  const location = useLocation();
  return (
    <section id="section">
      <Navbar></Navbar>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Agence />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/esprit" element={<Esprit />} />
      </Routes>
    </section>
  );
}

export default Section;
