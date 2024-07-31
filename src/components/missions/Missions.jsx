import React from "react";
import "./missions.css";
import missionContent from "../../content/missionContent";
import Aside from "../aside/Aside";
import MissionType from "./missionType/MissionType";
import FixedDiv from "../fixedDiv/FixedDiv";
import Logo from "../logo/Logo";

function Missions({ windowWidth }) {
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
      {windowWidth > 600 ? (
        <Aside>
          {/* <div id="nav-mission">
            {missionContent.map((mission, index) => (
              <a
                href="###"
                className={index === 0 ? "focus" : null}
                tabIndex="0"
                key={index}
                // onClick={() => handleClick(index)}
              >
                {mission.navTitle}
              </a>
            ))}
          </div> */}
        </Aside>
      ) : (
        <Logo />
      )}

      <FixedDiv height={100} left={8} top={450} speed={0.2} />
      {/* <FixedDiv height={200} left={55} top={600} speed={0.35} toTop /> */}
      <FixedDiv height={150} left={85} top={900} speed={0.55} toTop />
      <h1>NOS MISSIONS |</h1>
      {missionContent.map((mission, index) => {
        return <MissionType key={index} missionContent={mission} />;
      })}
      <div id="orange-stripe"></div>
    </div>
  );
}

export default Missions;
