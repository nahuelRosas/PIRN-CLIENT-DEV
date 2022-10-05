import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import "../../assets/styles/css/about.css";
const about = () => {
  return (
    <>
      <div className="about_container">
        <div
          className="about_image"
          style={{
            background: `url(https://ca.slack-edge.com/TPRS7H4PN-U03NMQJ2353-26ebec7a3185-512)  no-repeat center center/ cover`,
          }}></div>
        <span className="about_title">About Me</span>
        <p className="about_description">
          This is a solo project for Henry Bootcamp; was developed by Nahuel
          Rosas using technologies like React, Redux, Express and Sequelize -
          Postgres.
        </p>
        <div className="about_container_data">
          <a
            href="https://github.com/nahuelRosas"
            target="_blank"
            rel="noreferrer">
            <FiGithub className="about_social github" />
          </a>
          <a
            href="https://www.linkedin.com/in/nahuelrosas/"
            target="_blank"
            rel="noreferrer">
            <FiLinkedin className="about_social linkedin" />
          </a>
          <a
            href="https://www.instagram.com/nahuel.rosas/"
            target="_blank"
            rel="noreferrer">
            <FiInstagram className="about_social instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default about;
