import React, { useState } from "react";
import "./missions.css";
import missionContent from "../../content/missionContent";
import Aside from "../aside/Aside";
import MissionType from "./missionType/MissionType";

function Missions() {
  const [navChoice, setNavChoice] = useState(0);

  const handleClick = (index) => {
    setNavChoice(index);
    let links = document.querySelectorAll("#nav-mission a");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("focus");
    }
    links[index].classList.add("focus");
  };

  return (
    <>
      <Aside>
        <div id="nav-mission">
          {missionContent.map((mission, index) => {
            return (
              <a
                className={index === 0 ? "focus" : null}
                tabIndex="0"
                key={index}
                onClick={() => handleClick(index)}
              >
                {mission.navTitle}
              </a>
            );
          })}
        </div>
      </Aside>
      <h1>NOS MISSIONS |</h1>
      <MissionType navChoice={navChoice} missionContent={missionContent} />
    </>
  );
}

export default Missions;
