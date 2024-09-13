import React from "react";
import { Button } from "./Button";
import './HeroSection.css'

function HeroSection(props) {
  return (
    <div className="hero-container">
      {<img src={props.gameDetails.imgCover} alt='#'/>}
      
      <h1>{props.gameDetails.title}</h1>
      <p>{props.gameDetails.heroText}</p>
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="fa-regular fa-circle-play"></i>
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
