import getRandomInt from "../../commonFunction/getRandomInt";
import SpinnerLoading from "../components/spinnerLoading";
import { useLoadRestart } from "../../hooks/useLoad";
import React, { useState, useEffect } from "react";
import useDetails from "../../hooks/useDetails";
import { useLocation } from "react-router-dom";
import Platform from "../components/platform";
import "../../assets/styles/css/details.css";
const Details = () => {
  
  const [game, setGame] = useState({});
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const details = useDetails({ payload: location.pathname.split("/")[2] });
  const max = 999999;
  useLoadRestart();

  useEffect(() => {
    if (Object.keys(details).length !== 0) {
      setGame(details);
      setLoading(false);
    }
  }, [details]);

  if (isLoading) {
    return <SpinnerLoading />;
  }
  const platform = Platform({ game: game });

  return (
    <>
      <div className="details_container">
        <div
          className="details_image"
          style={{
            background: `url(${details.background_image})  no-repeat center center/ cover`,
          }}></div>
        <span className="details_rating">Rating: {details.rating}</span>
        <span className="details_title">{details.name}</span>
        <span className="details_id">ID: {details.id}</span>
        <div className="details_platforms">
          {platform.map((platform) => {
            return platform;
          })}
        </div>
        <p className="details_title_subE">Release Date:</p>
        <span className="details_released">{details.released}</span>
        <p className="details_title_subE">Available in :</p>
        <div className="details_boxes_grid">
          {details.stores?.map((stores) => {
            return <span key={getRandomInt(max)}>{stores}</span>;
          })}
        </div>
        <p className="details_title_subE">Genres :</p>
        <div className="details_boxes_grid">
          {details.genres?.map((genres) => {
            return <span key={getRandomInt(max)}>{genres}</span>;
          })}
        </div>
        <p className="details_title_subE">Platform :</p>
        <div className="details_boxes_grid">
          {details.platforms?.map((platform) => {
            return <span key={getRandomInt(max)}>{platform}</span>;
          })}
        </div>
        <p className="details_title_subE">Description :</p>
        <div className="details_description">{details.description}</div>
        <p className="details_title_subE">Tags :</p>
        <div className="details_boxes_grid">
          {details.tags?.map((tags) => {
            return <span key={getRandomInt(max)}>{tags}</span>;
          })}
        </div>
      </div>
    </>
  );
};

export default Details;
