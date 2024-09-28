import React from "react";
import './HeroSection.css'
import { HashLink } from "react-router-hash-link";

function HeroSection(props) {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={props.gameDetails.images.cover} alt="game wallpaper" className="hero-image" />
        {props.gameDetails.logo ?
          <div className="hero-context">
            <h1>Gameplay & Honest Reviews</h1>
            <h2>{props.gameDetails.heroText}</h2>
            <HashLink
              to="/#cards"
              scroll={el => scrollWithOffset(el, 80)}
            >
              <button class="pushable">
                <span class="front">
                  Favourite Games
                </span>
              </button>
            </HashLink>
          </div>
          :
          <div className="hero-context">
            <h1>{props.gameDetails.title}</h1>
            <h2>{props.gameDetails.heroText}</h2>
          </div>
        }
      </div>
    </div>
  );
}

export default HeroSection;
