import React, { useState, useEffect } from "react";
import "./App.css";
import ScreenIntro from "./components/screenIntro/ScreenIntro";
import Section from "./components/section/Section.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [introDisplayed, setIntroDisplayed] = useState(true);

  // setTimeout(() => {
  //   setIntroDisplayed(false);
  // }, 2000);

  useEffect(() => {
    // Changer l'état après 2 secondes pour masquer ScreenIntro
    const timer = setTimeout(() => {
      setIntroDisplayed(false);
    }, 2000);

    // Nettoyage du timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <ScreenIntro displayed={introDisplayed} />
        {!introDisplayed && <Section />}
      </div>
    </Router>
  );
}

export default App;
