import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";


function Fifa() {
  const fifaDetails = { 
    title: "Fifa 23",
    imgCover: "images/Fifa-23.jpg",
    heroText: "Ultimate team",
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

  const fifaCards = [
    { videoTitle: "", url: "", description: "" },
    ]

  return (
    <div>
    <HeroSection
      gameDetails={fifaDetails}
    />
    <div className="main">
      <GameDetails gameDetails={fifaDetails} />
      {/* <VideoCards cardDetails={fifaCards} /> */}
    </div>
  </div> 
 )
}

export default Fifa