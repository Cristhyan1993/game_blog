import React from 'react'
// import '../../App.css'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards';
import LandingText from '../components/LandingText';
import MoreGames from '../components/MoreGames';

function Home () {
    const homeDetails = { 
        title: "my-Gmz",
        images:{cover:"/images/homepage.jpeg"},
        heroText: "Because Every Game Deserves a Great Review.",
        logo: "images/my-GmzLogo.png"
      }
    return (
        <>
            <HeroSection gameDetails={homeDetails}/>
            <div className='main'>
               <LandingText/>
            <Cards/>  
               <MoreGames/>
            </div>
           
        </>
    )
}

export default Home;