import React, { useState, useEffect } from "react";
import "./section.css";
import Navbar from "../navbar/Navbar";
import Agence from "../agence/Agence.jsx";
import Missions from "../missions/Missions.jsx";
import Esprit from "../esprit/Esprit.jsx";
import { Routes, Route, useLocation } from "react-router-dom";

function Section() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="section">
      <Navbar></Navbar>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Agence windowWidth={windowWidth} />} />
        <Route
          path="/missions"
          element={<Missions windowWidth={windowWidth} />}
        />
        <Route path="/esprit" element={<Esprit windowWidth={windowWidth} />} />
      </Routes>
    </section>
  );
}

export default Section;
