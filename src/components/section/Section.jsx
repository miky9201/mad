import React, { useState, useEffect } from "react";
import "./section.css";
import Navbar from "../navbar/Navbar";
import Agence from "../agence/Agence.jsx";
import Missions from "../missions/Missions.jsx";
import Esprit from "../esprit/Esprit.jsx";
import Projet from "../projet/Projet.jsx";
import ProjetModal from "../projetModal/ProjetModal.jsx";

import { Routes, Route, useLocation } from "react-router-dom";

import projetContent from "../../content/projetContent.js";

function Section() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedProjet, setSelectedProjet] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      const savedProjet = window.localStorage.getItem("projetContent");
      const initial = savedProjet !== null ? JSON.parse(savedProjet) : {};
      const currentProjet = projetContent[initial - 1];
      setSelectedProjet(currentProjet);
    }

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
        <Route
          path="/projet"
          element={
            <Projet
              windowWidth={windowWidth}
              setSelectedProjet={setSelectedProjet}
            />
          }
        />
        <Route
          path="/projet/:projectName"
          element={
            <ProjetModal
              windowWidth={windowWidth}
              selectedProjet={selectedProjet}
            />
          }
        />
      </Routes>
    </section>
  );
}

export default Section;
