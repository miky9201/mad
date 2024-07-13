import React, { useState } from "react";
import "./App.css";
import ScreenIntro from "./components/screenIntro/ScreenIntro";
import Section from "./components/section/Section.jsx";
import Agence from "./components/agence/Agence.jsx";
import Missions from "./components/missions/Missions.jsx";
import Esprit from "./components/esprit/Esprit.jsx";

function App() {
  const [displayed, setDisplayed] = useState(true);

  setTimeout(() => {
    setDisplayed(false);
  }, 2000);

  return (
    <div className="App">
      <Section>
        {/* <Agence></Agence> */}
        <Missions></Missions>
        {/* <Esprit></Esprit> */}
      </Section>
      <ScreenIntro displayed={displayed}></ScreenIntro>
    </div>
  );
}

export default App;
