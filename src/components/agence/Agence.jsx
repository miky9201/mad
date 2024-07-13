import React from "react";
import "./agence.css";
import Aside from "../aside/Aside";
import agenceImg from "../../assets/images/agence-1.jpg";

function Agence() {
  return (
    <>
      <Aside></Aside>
      <h1>AGENCE |</h1>
      <div className="agence-content">
        <p>
          Entreprise créative et spécialiste du management de projet, MAD DESIGN
          intervient depuis sa création en 2012, sur des missions d’architecture
          intérieure. <br />
          Elle gère le projet dans sa totalité : de la définition du concept, à
          la planification / gestion des budgets / élaboration de plans, jusqu’à
          la livraison finale des travaux.
          <br /> <br />
          MAD DESIGN apporte toute son expertise pour la réussite d’opérations
          d’envergure, en construction neuve ou réhabilitation, pour des
          particuliers comme des professionnels.
          <br /> <br />
          Notre savoir-faire et notre expérience en gestion de projets nous
          permets d’appréhender des travaux avec de hauts niveaux d’exigence.
          Nous disposons d’un carnet d’adresse d’entreprises et d’artisans de
          confiance, habitués aux projets rigoureux, pouvant nous accompagner
          sur notre projet commun.
        </p>
        <img src={agenceImg} alt="bureau-agence" />
      </div>
    </>
  );
}

export default Agence;
