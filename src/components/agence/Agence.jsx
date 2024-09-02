import React, { useEffect } from "react";
import "./agence.css";
import Aside from "../aside/Aside";
import Logo from "../logo/Logo";
import agenceImg from "../../assets/images/agence-1.jpg";

function Agence({ windowWidth }) {
  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        {windowWidth > 600 ? <Aside></Aside> : <Logo />}
        <h1>AGENCE |</h1>
        <div className="agence-content">
          <p>
            Entreprise créative et spécialiste du management de projet, MAD
            DESIGN intervient, depuis sa création en 2012, sur des missions
            d’architecture intérieure. <br />
            Elle gère le projet dans sa totalité : de la définition du concept à
            la planification, la gestion des budgets, l’élaboration des plans,
            jusqu’à la livraison finale des travaux.
            <br /> <br />
            MAD DESIGN apporte toute son expertise pour la réussite d’opérations
            d’envergure, en construction neuve ou en réhabilitation, pour des
            particuliers comme pour des professionnels.
            <br /> <br />
            Notre savoir-faire et notre expérience en gestion de projets nous
            permettent d’appréhender des travaux avec un haut niveau d’exigence.
            Nous disposons d’un carnet d’adresses d’entreprises et d’artisans de
            confiance, habitués aux projets rigoureux, pouvant nous accompagner
            dans notre projet commun.
          </p>
          <img src={agenceImg} alt="bureau-agence" />
        </div>
        <div className="address-bottom">3 Passage Perreur | Paris</div>
      </div>
    </>
  );
}

export default Agence;
