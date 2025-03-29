import React, { useEffect } from "react";
import "./presse.css";
import Aside from "../aside/Aside";
import Logo from "../logo/Logo";
import { Helmet } from "react-helmet";

function Esprit({ windowWidth }) {
  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);

  const espritContent = [
    {
      name: "presse-1",
      url: "./images/presse-1.jpg",
    },
    {
      name: "presse-2",
      url: "./images/presse-2.jpg",
    },
    {
      name: "presse-3",
      url: "./images/presse-3.jpg",
    },
    {
      name: "presse-4",
      url: "./images/presse-4.jpg",
    },
    {
      name: "presse-5",
      url: "./images/presse-5.jpg",
    },
    {
      name: "presse-6",
      url: "./images/presse-6.jpg",
    },
    {
      name: "presse-7",
      url: "./images/presse-7.jpg",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Presse - MAD Design Paris</title>
        <meta
          name="description"
          content="Découvrez les articles de presse qui parle des projets réalisés par l'Agence MAD Design Paris"
        />
        <meta property="og:title" content="Presse - MAD Design Paris" />
        <meta
          property="og:description"
          content="Découvrez les articles de presse qui parle des projets réalisés par l'Agence MAD Design Paris"
        />
      </Helmet>
      {windowWidth > 600 ? <Aside></Aside> : <Logo />}
      <h1>Presse |</h1>
      <h2 className="mission-intro">
        Les articles qui parlent de nos projets.
      </h2>
      <div className="esprit-content">
        {espritContent.map((image, index) => {
          return (
            <div
              className="esprit-content"
              key={index}
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // border: "solid black 1px",
                boxShadow: "6px 6px 10px 3px rgba(0, 0, 0, 0.06)",
              }}
            ></div>
          );
        })}
      </div>
      <div className="address-bottom">3 Passage Perreur | Paris</div>
    </div>
  );
}

export default Esprit;
