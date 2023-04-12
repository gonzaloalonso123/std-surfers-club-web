import React from "react";
import TheTeamImages from "../../assets/images/TheTeam";
import "./TheTeam.css";

export const TheTeam = () => {
  return (
    <div className="the-team-container">
        <h1>THE TEAM</h1>
      <div className="the-team-grid">
        {TheTeamImages.map((img) => {
          return <img className="the-team-one-image" src={img} />;
        })}
      </div>
    </div>
  );
};
