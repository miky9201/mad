import React, { useEffect } from "react";
import "./missions.css";
import missionContent from "../../content/missionContent";
import Aside from "../aside/Aside";
import MissionType from "./missionType/MissionType";
import { Helmet } from "react-helmet";

import Logo from "../logo/Logo";

function Missions({ windowWidth }) {
  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Missions - MAD Design Paris</title>
        <meta
          name="description"
          content="Découvrez les différentes missions réalisables par notre Agence MAD Design Paris"
        />
        <meta property="og:title" content="Missions - MAD Design Paris" />
        <meta
          property="og:description"
          content="Découvrez les différentes missions réalisables par notre Agence MAD Design Paris"
        />
      </Helmet>
      {windowWidth > 600 ? <Aside></Aside> : <Logo />}

      {/* <FixedDiv height={100} left={8} top={450} speed={0.2} />
      <FixedDiv height={200} left={55} top={600} speed={0.35} toTop />
      <FixedDiv height={150} left={85} top={900} speed={0.55} toTop /> */}
      <h1>NOS MISSIONS |</h1>
      <h2 className="mission-intro">
        Plusieurs propositions pour vous accompagner :
      </h2>
      {missionContent.map((mission, index) => {
        return (
          <MissionType key={index} missionContent={mission} index={index} />
        );
      })}
      <div className="address-bottom">3 Passage Perreur | Paris</div>
    </div>
  );
}

export default Missions;
