import React from "react";
import "../../assets/styles/css/button.css";

const btn = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};
export default btn;
