import React from "react";
import { Button } from "./Button";
import './HeroSection.css'

function HeroSection(props) {
  return (
    <div className="hero-container">
      <div className="background-image">
        <>
          {props.gameDetails.logo ?
            <div className="hero-content-homepage">
              <img src={props.gameDetails.logo} alt="website logo" />
              <h2 className="subText">
                {props.gameDetails.heroText}
              </h2>
            </div>
            :
            <div className="hero-content-gamepage">
              <div className="hero-content-gamepage-left">
                <h1 className="title">
                  {props.gameDetails.title}
                </h1>
                <h2 className="subText">
                  {props.gameDetails.heroText}
                </h2>
              </div>
              <div className="hero-content-gamepage-right">
              <img src={props.gameDetails.images.cover} alt="website logo"/>
              </div>
            </div>}
        </>
      </div>

    </div>
  );
}

export default HeroSection;

// {<img src={props.gameDetails.images.cover} alt='#'/>}
// <h1>{props.gameDetails.title}</h1>
// <p>{props.gameDetails.heroText}</p>