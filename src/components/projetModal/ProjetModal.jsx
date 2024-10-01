import { useEffect } from "react";
import "./projetModal.css";
import Aside from "../../components/aside/Aside";
import Logo from "../../components/logo/Logo";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function ProjetModal({ windowWidth, selectedProjet }) {
  const tutu = "Tutu";

  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <meta property="og:title" content={`${tutu} - MAD Design Paris`} />
        <meta
          property="og:description"
          content={`Découvrez notre projet ${tutu} réalisé par MAD Design Paris`}
        />
      </Helmet>
      {windowWidth > 600 ? (
        <Aside>
          <Link to="/projet" style={{ textDecoration: "none", color: "black" }}>
            <div className="return-container">
              <p>Revenir aux projets</p>
              <div className="return">
                <IconContext.Provider value={{ color: "black", size: "100%" }}>
                  <IoIosArrowRoundBack />
                </IconContext.Provider>
              </div>
            </div>
          </Link>
        </Aside>
      ) : (
        <Logo />
      )}
      <h1>{selectedProjet.title}</h1>
      {windowWidth < 600 && (
        <Link to="/projet">
          <div className="return-container">
            <div className="return">
              <IconContext.Provider value={{ color: "black", size: "100%" }}>
                <IoIosArrowRoundBack />
              </IconContext.Provider>
            </div>
          </div>
        </Link>
      )}
      <div className="projet-name-content">
        {selectedProjet.content}
        {selectedProjet?.images?.map((image, index) => (
          <img
            key={index}
            width={windowWidth < 1000 ? "95%" : "70%"}
            src={image.url}
            alt={image.name}
          />
        ))}
      </div>

      <div className="address-bottom">3 Passage Perreur | Paris</div>
    </div>
  );
}

export default ProjetModal;
