import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";


function RocketLeague() {
  const rocketLeagueDetails = { 
    title: "Rocket League",
    imgCover: "images/Rocket-League.jpg",
    heroText: "View my rank",
    gameReview: {
      gameOverview:'',
      difficulty: {
        description:"",
        rating: 6
      },
      multiplayer:"",
      conclusion:{
        description:'',
        score: 7
      }
    },
  }

  const rocketLeagueCards = [
    { videoTitle: "", url: "", description: "" },
    ]
 
  return (
    <div>
    <HeroSection
      gameDetails={rocketLeagueDetails}
    />
    <div className="main">
      <GameDetails gameDetails={rocketLeagueDetails} />
      {/* <VideoCards cardDetails={rocketLeagueCards} /> */}
    </div>
  </div> )
}

export default RocketLeague