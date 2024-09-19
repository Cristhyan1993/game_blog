import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutMeComponent from '../components/AboutMeComponent'


export default function AboutMe() {
    const homeDetails = { 
        title: "my-Gmz",
        images:{cover:"/images/homepage.jpeg"},
        heroText: "Because Every Game Deserves a Great Review.",
        logo: "images/my-GmzLogo.png"
      }
    return (
        <>
            <HeroSection gameDetails={homeDetails} />
            <div className='main'>
                <AboutMeComponent/>
            </div>
        </>
    )
}
