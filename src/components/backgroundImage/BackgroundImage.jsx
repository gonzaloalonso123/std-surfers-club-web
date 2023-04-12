import React from 'react';
import bgImage from "../../assets/images/background.jpg";
import './backgroundImage.css';

const BackgroundImage = () => {
  return (
    <div className='image-container'>
      <h1 className='background-title'>STONED SURFER CLUB</h1>
      <img className = 'background-image' src={bgImage}></img>
    </div>
  )
}

export default BackgroundImage;