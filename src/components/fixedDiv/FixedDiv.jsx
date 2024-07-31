import React, { useState, useEffect } from "react";
import "./fixedDiv.css";

const FixedDiv = ({ height, top, left, speed, toTop }) => {
  const random = Math.random();
  const [topPosition, setTopPosition] = useState(random * top);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY * random;

      if (toTop) {
        setTopPosition(topPosition - scrollPosition * speed); // Ajustez le facteur de multiplication pour changer la vitesse de déplacement
      } else {
        setTopPosition(topPosition + scrollPosition * speed);
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
        left: `${left}vw`,
      }}
    ></div>
  );
};

export default FixedDiv;
