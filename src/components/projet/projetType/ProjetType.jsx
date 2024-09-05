import React, { useEffect } from "react";

function ProjetType({ projetContent, setSelectedProjet }) {
  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setSelectedProjet(projetContent);
  };
  return (
    <div className="thumb" onClick={handleClick}>
      <img src={projetContent.mainImage} alt={projetContent.name} />
      <p>{projetContent.title}</p>
    </div>
  );
}

export default ProjetType;
