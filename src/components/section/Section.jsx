import React from "react";
import "./section.css";
import Navbar from "../navbar/Navbar";
import Agence from "../agence/Agence.jsx";
import Missions from "../missions/Missions.jsx";
import Esprit from "../esprit/Esprit.jsx";
import { Routes, Route } from "react-router-dom";

function Section({ children }) {
  return (
    <section id="section">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Agence />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/esprit" element={<Esprit />} />
      </Routes>
    </section>
  );
}

export default Section;
