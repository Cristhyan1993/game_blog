import React from 'react'
// import '../../App.css'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards';
import LandingText from '../components/LandingText';
import MoreGames from '../components/MoreGames';
import GameList from '../components/GameList';

function Home() {
    const homeDetails = {
        title: "my-Gmz",
        images: { cover: "/images/Controller-Background.jpg" },
        heroText: "Because Every Game Deserves a Great Review.",
        logo: "images/my-GmzLogo.png"
    }
    return (
        <>
            <HeroSection gameDetails={homeDetails} />
            <div className='main'>
                <LandingText />
                <GameList />
                <Cards />
                <MoreGames />
            </div>

        </>
    )
}

export default Home;