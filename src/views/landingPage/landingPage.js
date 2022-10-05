import getRandomInt from "../../commonFunction/getRandomInt";
import { useState, useEffect, useCallback } from "react";
import { data } from "../../constants/data-landingPage";
import "../../assets/styles/css/landingPage.css";
import Button from "../components/button";
import { Link } from "react-router-dom";
import React from "react";
import { useLoadRestart } from "../../hooks/useLoad";
const autoScroll = true;
const intervalTime = 2500;

const LandingPage = () => {
  useLoadRestart();

  const length = data.length;
  const [current, setCurrent] = useState(getRandomInt(length));
  const nextSlide = useCallback(() => {
    let random = getRandomInt(length);
    setCurrent(current !== random ? random : getRandomInt(length));
  }, [current, length]);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        nextSlide();
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [nextSlide]);

  return (
    <>
      {data.map((image, index) => {
        return (
          <div
            className={index === current ? "slide current" : "slide"}
            key={index}>
            {index === current && (
              <img src={image} alt="slide" className="image" />
            )}
          </div>
        );
      })}
      <Link className="Link" to="/home">
        <Button className="button_landingPage" text="ENTER" />
      </Link>
    </>
  );
};

export default LandingPage;
