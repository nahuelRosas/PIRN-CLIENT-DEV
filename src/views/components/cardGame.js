import "../../assets/styles/css/cardGame.css";
import React from "react";
import Platform from "./platform";

const cardGame = ({ game }) => {
  const platform = Platform({ game });

  return (
    <>
      <div className="cardGame_container">
        <div
          className="cardGame_image"
          style={{
            background: `url(${game.background_image})  no-repeat center center/ cover`,
          }}></div>
        <div className="cardGame_title">{game.name}</div>
        <div className="cardGame_platforms">
          {platform.map((platform) => {
            return platform;
          })}
        </div>
      </div>
    </>
  );
};

export default cardGame;
