import React from "react";
import ReactPlayer from "react-player";
import "../../assets/styles/css/error.css";

const Error = () => {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          url="videos/error.mp4"
          width="396%"
          height="100%"
          loop={true}
          playing={true}
          controls={false}
          className="react-player"
        />

        <div className="error_container">
          <span className="error_title">
            oh, we're sorry but you've broken the page! Haha, go back home!
          </span>
          <span className="error_title">ERROR: 404 Not Found</span>
        </div>
      </div>
    </>
  );
};

export default Error;
