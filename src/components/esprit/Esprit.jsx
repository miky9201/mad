import React from "react";
import "./esprit.css";
import Aside from "../aside/Aside";

function Esprit() {
  const espritContent = [
    {
      name: "esprit-1",
      url: "./images/esprit-1.jpg",
    },
    {
      name: "esprit-2",
      url: "./images/esprit-2.jpg",
    },
    {
      name: "esprit-3",
      url: "./images/esprit-3.jpg",
    },
    {
      name: "esprit-4",
      url: "./images/esprit-4.jpg",
    },
    {
      name: "esprit-5",
      url: "./images/esprit-5.jpg",
    },
    {
      name: "esprit-6",
      url: "./images/esprit-6.jpg",
    },
  ];
  return (
    <>
      <Aside></Aside>
      <h1>ESPRIT |</h1>
      <div className="esprit-content">
        {espritContent.map((image, index) => {
          return (
            <div
              className="esprit-content"
              key={index}
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default Esprit;
