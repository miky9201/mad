import React, { useEffect } from "react";
import "./esprit.css";
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
      name: "esprit-1",
      url: "./images/esprit-1.jpg",
    },
    {
      name: "esprit-2",
      url: "./images/esprit-2.jpg",
    },
    {
      name: "esprit-3",
      url: "./images/esprit-3.jpg",
    },
    {
      name: "esprit-4",
      url: "./images/esprit-4.jpg",
    },
    {
      name: "esprit-5",
      url: "./images/esprit-5.jpg",
    },
    {
      name: "esprit-6",
      url: "./images/esprit-6.jpg",
    },
    {
      name: "esprit-7",
      url: "./images/esprit-7.jpg",
    },
    {
      name: "esprit-8",
      url: "./images/esprit-8.jpg",
    },
    {
      name: "esprit-9",
      url: "./images/esprit-9.jpg",
    },
    {
      name: "esprit-10",
      url: "./images/esprit-10.jpg",
    },
    {
      name: "esprit-11",
      url: "./images/esprit-11.jpg",
    },
    {
      name: "esprit-12",
      url: "./images/esprit-12.jpg",
    },
    {
      name: "esprit-13",
      url: "./images/esprit-13.jpg",
    },
    {
      name: "esprit-14",
      url: "./images/esprit-14.jpg",
    },
    {
      name: "esprit-15",
      url: "./images/esprit-15.jpg",
    },
    {
      name: "esprit-16",
      url: "./images/esprit-16.jpg",
    },
    {
      name: "esprit-17",
      url: "./images/esprit-17.jpg",
    },
    {
      name: "esprit-18",
      url: "./images/esprit-18.jpg",
    },
    {
      name: "esprit-19",
      url: "./images/esprit-19.jpg",
    },
    {
      name: "esprit-20",
      url: "./images/esprit-20.jpg",
    },
    {
      name: "esprit-21",
      url: "./images/esprit-21.jpg",
    },
    {
      name: "esprit-22",
      url: "./images/esprit-22.jpg",
    },
    {
      name: "esprit-23",
      url: "./images/esprit-23.jpg",
    },
    {
      name: "esprit-24",
      url: "./images/esprit-24.jpg",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Esprit - MAD Design Paris</title>
        <meta
          name="description"
          content="Découvrez les inspirations artistiques de notre Agence MAD Design Paris"
        />
        <meta property="og:title" content="Esprit - MAD Design Paris" />
        <meta
          property="og:description"
          content="Découvrez les inspirations artistiques de notre Agence MAD Design Paris"
        />
      </Helmet>
      {windowWidth > 600 ? <Aside></Aside> : <Logo />}
      <h1>ESPRIT |</h1>
      <h2 className="mission-intro">Ce qui nous inspire</h2>
      <div className="esprit-content">
        {espritContent.map((image, index) => {
          return (
            <div
              className="esprit-content"
              key={index}
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
