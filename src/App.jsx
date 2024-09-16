import React, { useState, useEffect } from "react";
import "./App.css";
import ScreenIntro from "./components/screenIntro/ScreenIntro";
import Section from "./components/section/Section.jsx";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isRootRoute = location.pathname === "/";

  const [introDisplayed, setIntroDisplayed] = useState(() => {
    const storedValue = localStorage.getItem("introDisplayed");
    return storedValue ? JSON.parse(storedValue) : true; // Default to true if not found
  });

  useEffect(() => {
    if (isRootRoute) {
      setIntroDisplayed(true);
    }
  }, [isRootRoute]);

  useEffect(() => {
    // Changer l'état après 2 secondes pour masquer ScreenIntro
    if (introDisplayed) {
      setTimeout(() => {
        setIntroDisplayed(false);
      }, 2000);
      localStorage.setItem("introDisplayed", false); // Sauvegarder la nouvelle valeur dans localStorage
    }

    // Nettoyage du timer lors du démontage du composant
  }, [introDisplayed]);

  return (
    <div className="App">
      <ScreenIntro displayed={introDisplayed} />
      {!introDisplayed && <Section />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
