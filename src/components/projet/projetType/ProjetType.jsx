import React from "react";

function ProjetType({ navChoice, projetContent }) {
  return (
    <div className="thumb">
      <img src={projetContent.image} alt={projetContent.name} />
      {projetContent.title}
    </div>
  );
}

export default ProjetType;
