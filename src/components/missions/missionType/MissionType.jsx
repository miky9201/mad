import React from "react";

function MissionType({ navChoice, missionContent }) {
  return (
    <>
      {missionContent[navChoice].title}
      {missionContent[navChoice].content}
    </>
  );
}

export default MissionType;
