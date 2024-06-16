import React, { useState } from "react";
import "./App.css";
import ScreenIntro from "./components/screenIntro/ScreenIntro";
import Section from "./components/section/Section.jsx";

function App() {
  const [displayed, setDisplayed] = useState(true);

  setTimeout(() => {
    setDisplayed(false);
  }, 2000);

  return (
    <div className="App">
      <Section></Section>

      <ScreenIntro displayed={displayed}></ScreenIntro>
    </div>
  );
}

export default App;
