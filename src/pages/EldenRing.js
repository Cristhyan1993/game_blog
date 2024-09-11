import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'


function EldenRing() {
  const gameCover = "images/Elden-Ring.jpg"
  const heroHeading = "Elden Ring"
  const heroText = "Boss Battles"
  return (
    <div>
    <HeroSection gameCover={gameCover} heroHeading={heroHeading} heroText={heroText}/>
 </div> )
}

export default EldenRing