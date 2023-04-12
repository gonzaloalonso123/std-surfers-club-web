import React, { useEffect, useRef } from "react";
import Video from "../../assets/videos/lagunareef.mp4";
import Title from "../title/Title";
import "./LagunaReef.css";

export const LagunaReef = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  });
  return (
    <div className="lagunaReef-container">
      <label className="lagunaReef-title">LAGUNA REEF</label>
      <video
        ref={videoRef}
        style={{ width: "100%" }}
        src={Video}
        autoplay="true"
        loop
        className="lagunaReef-video"
      />
      <button className="lagunaReef-enter-button">ENTER</button>
    </div>
  );
};
