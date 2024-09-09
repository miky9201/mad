import React, { useEffect } from "react";

function ProjetType({ projetContent, setSelectedProjet, identification }) {
  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setSelectedProjet(projetContent);
    localStorage.setItem("projetContent", JSON.stringify(identification));
  };
  return (
    <div className="thumb" onClick={handleClick}>
      <img src={projetContent.mainImage} alt={projetContent.name} />
      <p>{projetContent.title}</p>
    </div>
  );
}

export default ProjetType;
