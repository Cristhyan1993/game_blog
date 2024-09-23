import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutMeComponent from '../components/AboutMeComponent'
import { useEffect } from 'react'


export default function AboutMe() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []
      )
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
