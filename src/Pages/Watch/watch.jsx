import React from "react";
import ArrowBack from "@material-ui/icons/ArrowBackRounded";
import Video from "./Video.mp4";
import "./Watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBack />
        Home
      </div>
      <video controls autoplay className="video" src={Video} />
    </div>
  );
};

export default Watch;
