import React, { useState, useEffect } from "react";

function MissionType({ missionContent, index }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="title-content" onClick={handleToggle}>
        {missionContent.title}
      </div>

      <p>{isOpen ? missionContent.content : null}</p>
    </>
  );
}

export default MissionType;
