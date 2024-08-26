import React, { useState } from "react";
import "./projet.css";
import projetContent from "../../content/projetContent";
import projetsNav from "../../content/projetsNav";
import Aside from "../aside/Aside";
import Logo from "../logo/Logo";
import ProjetType from "./projetType/ProjetType";

function Projet({ windowWidth }) {
  const [navChoice, setNavChoice] = useState(0);

  const handleClick = (index) => {
    setNavChoice(index);
    let links = document.querySelectorAll("#nav-projet p");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("focus");
    }
    links[index].classList.add("focus");
  };

  const filteredProjetContent = projetContent.filter(
    (projet) => projet.categoryId === projetsNav[navChoice].categoryId
  );

  return (
    <div>
      {windowWidth > 600 ? (
        <Aside>
          <div id="nav-projet">
            {projetsNav.map((projet, index) => (
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
        </Aside>
      ) : (
        <Logo />
      )}
      <h1>NOS PROJETS |</h1>
      {windowWidth < 600 && (
        <div id="nav-projet">
          {projetsNav.map((projet, index) => (
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
        {filteredProjetContent.map((projet, index) => (
          <ProjetType
            key={index}
            navChoice={navChoice}
            projetContent={projet}
            index={index}
          />
        ))}
      </div>
      <div className="address-bottom">3 Passage Perreur | Paris</div>
    </div>
  );
}

export default Projet;
