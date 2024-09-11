import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'


function Fifa() {
  const gameCover = "images/Fifa-23.jpg"
  const heroHeading = "Fifa 23"
  const heroText = "Ultimate team"
  return (
    <div>
    <HeroSection gameCover={gameCover} heroHeading={heroHeading} heroText={heroText}/>
 </div> )
}

export default Fifa