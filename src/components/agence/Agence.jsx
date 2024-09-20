import React, { useEffect, useState } from "react";
import "./agence.css";
import Aside from "../aside/Aside";
import Logo from "../logo/Logo";
import agenceImg1 from "../../assets/images/agence-1.jpg";
import agenceImg2 from "../../assets/images/agence-2.jpg";
import agenceImg3 from "../../assets/images/agence-3.jpg";
import agenceImg4 from "../../assets/images/agence-4.jpg";

function Agence({ windowWidth }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Pour gérer l'animation de fondu
  const images = [agenceImg2, agenceImg1, agenceImg3, agenceImg4];

  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
    const intervalId = setInterval(() => {
      setIsAnimating(true); // Commence l'animation en définissant l'opacité à 0
      setTimeout(() => {
        // Après le délai, on passe à l'image suivante
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsAnimating(false); // Remet l'opacité à 1
      }, 500); // Durée de l'animation (500ms)
    }, 6000);
    return () => clearInterval(intervalId);
  }, [images.length]);

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
          <img
            className={`animate-image ${
              isAnimating ? "animate-out" : "animate-in"
            }`} // Classe dynamique pour le fondu
            src={images[currentImage]}
            alt="bureau-agence"
          />
        </div>
        <div className="address-bottom">3 Passage Perreur | Paris</div>
      </div>
    </>
  );
}

export default Agence;
