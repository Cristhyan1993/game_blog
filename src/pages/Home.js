import React from 'react'
// import '../../App.css'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards';

function Home () {
    const homeDetails = { 
        title: "Welcome to my-Gmz",
        images:{cover:"/images/homepage.jpeg"},
        heroText: "Because Every Game Deserves a Great Review.",
      }
    return (
        <>
            <HeroSection gameDetails={homeDetails}/>
            <Cards/>
        </>
    )
}

export default Home;