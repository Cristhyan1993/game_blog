import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutMeComponent from '../components/AboutMeComponent'


export default function AboutMe() {
    const homeDetails = {
        title: "Welcome to my games",
        images: { cover: "/images/homepage.jpeg" },
        heroText: "Page dedicated to showcase my favourite games",
        overview: "Having completed the main story including the platimun relics, CTR challanges and time trials. i tackled all the developer time trials in order to obtain the platinum playstation trophy. You can view my developer time trials in the videos below."
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
