import React from 'react';
import ComicImg from "../../assets/images/comic.png";
import './Comic.css';

export const Comic = () => {
  return (
    <div className='comic-container'>
        <img className='comic-image' src ={ComicImg} />
    </div>
  )
}
