import React from "react";
import './title.css';

const Title = (title) => {
  return (
    <div className="title-container">
      <h1>{title.title.toUpperCase()}</h1>
      <hr className="title-underline"/>
    </div>
  );
};

export default Title;
