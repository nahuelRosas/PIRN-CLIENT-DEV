import React from "react";
import "../../assets/styles/css/card.css";

const Card = (props) => {
  return (
    <div className="main">
      <div className="card">
        <div className="containerDataCard">{props.children}</div>
      </div>
    </div>
  );
};
export default Card;
