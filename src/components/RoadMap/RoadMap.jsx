import React, { useState } from "react";
import Map from "../../assets/images/Island.png";
import Title from "../title/Title";
import WhitePaperImage from "../../assets/images/whitepaper.png";
import "./RoadMap.css";

const roadMapListContents = [
  [
    "2D & 3D art development",
    "Website design and launch",
    "Social Media Accounts launched",
    "Whitepaper released",
    "Development of Laguna Reef",
  ],
  [
    "4444 Stoned Surfers launched into Opensea",
    "Charity donations to Surftismo",
    "5 Stoned Surfboards exclusive for Holders + Laguna Reef Metaverse",
    "$DUDE and $GLAB token launch",
    "Airdrop for OG holders (1st GEN)",
    "Collectibles raffle for holders",
  ],
  [
    "Reef Surfers game launch",
    "2nd Gen Stoned Surfer in development",
    "Creation of Creative Eye Studio in Madrid",
    "2 weekly competition in the game",
  ],
  [
    "Release of the Gen 2 collection",
    "First Stoned Surfer Physical Event",
    "4 Weekly boards to win in the game",
  ],
];

export const RoadMap = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);
  return (
    <div>
      <Title title="Roadmap" />
      <div className="road-map-phases-buttons-container">
        {[0, 1, 2, 3].map((n) => (
          <button className="phase-button" onClick={() => setSelectedPhase(n)}>
            Phase {n + 1}
          </button>
        ))}
      </div>
      <div className="road-map-container">
        <div className="road-map-image-container">
          <img className="road-map-image" src={Map} />
        </div>
        <div className="road-map-phases">
          <div className="phase-list-container">
            <ul className="phase-list">
              {roadMapListContents[selectedPhase].map((e) => (
                <li>{e}</li>
              ))}
            </ul>
          </div>
          <img className="whitePaper-image" src={WhitePaperImage} alt="" />
        </div>
      </div>
    </div>
  );
};
