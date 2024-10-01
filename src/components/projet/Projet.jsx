import React, { useEffect } from "react";
import "./projet.css";
import projetContent from "../../content/projetContent";
import projetsNav from "../../content/projetsNav";
import Aside from "../aside/Aside";
import Logo from "../logo/Logo";
import ProjetType from "./projetType/ProjetType";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Projet({ windowWidth, setSelectedProjet, navChoice, setNavChoice }) {
  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterFocus(navChoice);
  }, [navChoice]);

  const filterFocus = (index) => {
    let links = document.querySelectorAll("#nav-projet p");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("focus");
    }
    links[index].classList.add("focus");
  };

  const handleClick = (index) => {
    localStorage.setItem("indexLocalStorage", JSON.stringify(index));
    setNavChoice(localStorage.getItem("indexLocalStorage"));

    filterFocus(index);
  };

  const filteredProjetContent = projetContent.filter(
    (projet) => projet.categoryId === projetsNav[navChoice].categoryId
  );

  return (
    <div>
      <Helmet>
        <title>Projets - MAD Design Paris</title>
        <meta
          name="description"
          content="Découvrez les différents projets réalisés par notre Agence MAD Design Paris"
        />
        <meta property="og:title" content="Projets - MAD Design Paris" />
        <meta
          property="og:description"
          content="Découvrez les différents projets réalisés par notre Agence MAD Design Paris"
        />
      </Helmet>
      {windowWidth > 600 ? (
        <Aside>
          <div id="nav-projet">
            {projetsNav?.map((projet, index) => (
              <p
                className={index === navChoice ? "focus" : null}
                tabIndex="0"
                key={index}
                onClick={() => handleClick(index)}
              >
                {projet.navTitle}
              </p>
            ))}
          </div>
        </Aside>
      ) : (
        <Logo />
      )}
      <h1>NOS PROJETS |</h1>
      {windowWidth < 600 && (
        <div id="nav-projet">
          {projetsNav?.map((projet, index) => (
            <p
              className={index === 0 ? "focus" : null}
              tabIndex="0"
              key={index}
              onClick={() => handleClick(index)}
            >
              {projet.navTitle}
            </p>
          ))}
        </div>
      )}
      <div className="projet-content">
        {filteredProjetContent?.map((projet) => (
          <React.Fragment key={projet.name}>
            <Link to={`/projet/${projet.name}`}>
              <ProjetType
                navChoice={navChoice}
                projetContent={projet}
                setSelectedProjet={setSelectedProjet}
                identification={projet.identification}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className="address-bottom">3 Passage Perreur | Paris</div>
    </div>
  );
}

export default Projet;
