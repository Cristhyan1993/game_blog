import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'


function CallofDuty() {
  const gameCover = "images/Call-of-Duty.jpg"
  const heroHeading = "Call of Duty Modern Warefare 2"
  const heroText = "Best gameplay"
  return (
    <div>
    <HeroSection gameCover={gameCover} heroHeading={heroHeading} heroText={heroText}/>
 </div> )
}

export default CallofDuty