import React, { useState } from "react";
import "./App.css";
import ScreenIntro from "./components/screenIntro/ScreenIntro";
import Section from "./components/section/Section.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [displayed, setDisplayed] = useState(true);

  setTimeout(() => {
    setDisplayed(false);
  }, 2000);

  return (
    <Router>
      <div className="App">
        <Section />
        <ScreenIntro displayed={displayed}></ScreenIntro>
      </div>
    </Router>
  );
}

export default App;
