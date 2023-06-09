import React from "react";
import Title from "../title/Title";
import Boards from "../../assets/gif/boards.gif";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Title title="About us" />
      <div className="about-us-container">
        <div className="about-us-text">
          <p>
            ● The Stoned Surfer Club is a unique and exciting project that
            brings the laid- back, carefree vibes of the 1980s surfing scene
            into modern times. Creating a digital project that merges the
            nostalgia of the past with the cutting- edge technology of today.{" "}
          </p>
          <p>
            ●Join the club and immerse yourself in the virtual world of Laguna
            Reef, were you can catch the biggest, baddest waves in VR. But the
            real thrill is the Reef Riders Game, where you'll use your digital
            sur oard to compete against other surfers and earn rewards. But it's
            not all about the digital side of things. As a member of the Stoned
            Surfer Club, you'll also score some sweet physical rewards, like
            sur oards, wetsuits, and collectibles.{" "}
          </p>
          <p>
            ● This project is not just about blockchain - it's about the entire
            surfing experience and the sense of community it fosters. So grab
            your board and catch the next wave with the Stoned Surfer Club,
            because life's too short to spend it stuck on the shore.
          </p>
          <button className="mint-now-button">MINT NOW</button>
        </div>
        <div className="about-us-surfboards">
          <img className="boards-image" src={Boards} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
