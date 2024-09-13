import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";


function CallofDuty() {
  const callOfDutyDetails = { 
    title: "Call of Duty Modern Warefare 2",
    imgCover: "images/Call-of-Duty.jpg",
    heroText: "View my rank & gameplay",
    gameReview: {
      gameOverview:'',
      difficulty: {
        description:"",
        rating: 7
      },
      multiplayer:"",
      conclusion:{
        description:'',
        score: 8
      }
    },
  }

  const callOfDutyCards = [
    { videoTitle: "", url: "", description: "" },
    ]

  return (
    <div>
    <HeroSection
      gameDetails={callOfDutyDetails}
    />
    <div className="main">
      <GameDetails gameDetails={callOfDutyDetails} />
      {/* <VideoCards cardDetails={callOfDutyCards} /> */}
    </div>
    </div>
    )
}

export default CallofDuty