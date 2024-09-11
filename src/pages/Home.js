import React from 'react'
// import '../../App.css'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards';

function Home () {
    const homeDetails = { 
        title: "Welcome to my games",
        vidCover: "/videos/CrashTeamRacingNitro-Fueled-RoosTubes.mp4",
        heroText: "Page dedicated to showcase my favourite games",
        overview:"Having completed the main story including the platimun relics, CTR challanges and time trials. i tackled all the developer time trials in order to obtain the platinum playstation trophy. You can view my developer time trials in the videos below."
      }
    return (
        <>
            <HeroSection gameDetails={homeDetails}/>
            <Cards/>
        </>
    )
}

export default Home;