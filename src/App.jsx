import React, { useState } from "react";
import "./App.css";
import ScreenIntro from "./components/screenIntro/ScreenIntro";
import Socials from "./components/socials/Socials";
import logo from "./assets/images/logo.png";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";

function App() {
  const [displayed, setDisplayed] = useState(true);

  setTimeout(() => {
    setDisplayed(false);
  }, 2000);

  return (
    <div className="App">
      <section id="agence">
        <aside className="aside">
          <img src={logo} alt="logo-mad" />
          <Socials></Socials>
        </aside>
        <nav className="nav">
          <IconContext.Provider value={{ color: "black", size: "80%" }}>
            <div>
              <FiMenu />
            </div>
          </IconContext.Provider>
        </nav>
        <h1>AGENCE |</h1>
        <p>
          Entreprise créative et spécialiste du management de projet, MAD DESIGN
          intervient depuis sa création en 2012, sur des missions d’architecture
          intérieure. <br />
          Elle gère le projet dans sa totalité : de la définition du concept, à
          la planification / gestion des budgets / élaboration de plans, jusqu’à
          la livraison finale des travaux.
        </p>
        <p>
          MAD DESIGN apporte toute son expertise pour la réussite d’opérations
          d’envergure, en construction neuve ou réhabilitation, pour des
          particuliers comme des professionnels.
        </p>
        <p>
          Notre savoir-faire et notre expérience en gestion de projets nous
          permets d’appréhender des travaux avec de hauts niveaux d’exigence.
          Nous disposons d’un carnet d’adresse d’entreprises et d’artisans de
          confiance, habitués aux projets rigoureux, pouvant nous accompagner
          sur notre projet commun.
        </p>
      </section>
      <ScreenIntro displayed={displayed}></ScreenIntro>
    </div>
  );
}

export default App;
