import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'


function RocketLeague() {
  const gameCover = "images/Rocket-League.jpg"
  const heroHeading = "Rocket League"
  const heroText = "View my rank"
  return (
    <div>
    <HeroSection gameCover={gameCover} heroHeading={heroHeading} heroText={heroText}/>
 </div> )
}

export default RocketLeague