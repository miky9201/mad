import React from "react";
import "./missions.css";
import missionContent from "../../content/missionContent";
import Aside from "../aside/Aside";
import MissionType from "./missionType/MissionType";
import FixedDiv from "../fixedDiv/FixedDiv";

function Missions() {
  // COMMENTER MAIS A UTILISER POUR PROJET

  // const [navChoice, setNavChoice] = useState(0);

  // const handleClick = (index) => {
  //   setNavChoice(index);
  //   let links = document.querySelectorAll("#nav-mission a");
  //   for (let i = 0; i < links.length; i++) {
  //     links[i].classList.remove("focus");
  //   }
  //   links[index].classList.add("focus");
  // };

  return (
    <div>
      <Aside>
        {/* <div id="nav-mission">
          {missionContent.map((mission, index) => {
            return (
              <a
                href="###"
                className={index === 0 ? "focus" : null}
                tabIndex="0"
                key={index}
                onClick={() => handleClick(index)}
              >
                {mission.navTitle}
              </a>
            );
          })}
        </div> */}
      </Aside>
      <FixedDiv height={100} left={28} top={200} speed={0.2} />
      <FixedDiv height={200} left={55} top={600} speed={0.35} toTop />
      <h1>NOS MISSIONS |</h1>
      {missionContent.map((mission, index) => {
        return <MissionType key={index} missionContent={mission} />;
      })}
      <div id="orange-stripe"></div>
    </div>
  );
}

export default Missions;
