import React from "react";

function MissionType({ missionContent }) {
  return (
    <>
      {missionContent.title}
      {missionContent.content}
    </>
  );
}

export default MissionType;
