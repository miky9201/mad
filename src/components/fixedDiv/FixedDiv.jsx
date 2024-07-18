import React, { useState, useEffect } from "react";
import "./fixedDiv.css";

const FixedDiv = ({ height, top, left, speed, toTop }) => {
  const [topPosition, setTopPosition] = useState(top);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (toTop) {
        setTopPosition(top - scrollPosition * speed); // Ajustez le facteur de multiplication pour changer la vitesse de déplacement
      } else {
        setTopPosition(top + scrollPosition * speed); // Ajustez le facteur de multiplication pour changer la vitesse de déplacement
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="fixed-div"
      style={{
        height: `${height}px`,
        top: `${topPosition}px`,
        left: `${left}%`,
      }}
    ></div>
  );
};

export default FixedDiv;
