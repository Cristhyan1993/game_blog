import React from "react";
import './HeroSection.css'

function HeroSection(props) {
  return (
    <div className="hero-container">
        <img src={props.gameDetails.images.cover} alt="game wallpaper" className="hero-image"/>
      <div className="hero-title">
      {props.gameDetails.logo ?
        <img src={props.gameDetails.logo} alt="website logo" id="image-logo"/>
        :
        <h1>{props.gameDetails.title}</h1>
        }
        <h2 >{props.gameDetails.heroText}</h2>
      </div>
    </div>
  );
}

export default HeroSection;
