import React, { useEffect } from "react";

function MissionType({ missionContent }) {
  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {missionContent.title}
      {missionContent.content}
    </>
  );
}

export default MissionType;
