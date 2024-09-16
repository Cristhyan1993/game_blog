import React from 'react'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";
import SwiperComponent from '../components/Swiper';


function RocketLeague() {
  const rocketLeagueDetails = { 
    title: "Rocket League",
    images: {
      cover: "images/Rocket-League.jpg",
      gallery:[
        {imageTitle:"", src:"", alt:""},
      ]
    },
    videos: [
      { videoTitle: "", url: "", description: "" },
    ],
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

 
  return (
    <div>
    <HeroSection
      gameDetails={rocketLeagueDetails}
    />
    <div className="main">
      <GameDetails gameDetails={rocketLeagueDetails} />
      <SwiperComponent gameDetails={rocketLeagueDetails}/>
      {/* <VideoCards cardDetails={rocketLeagueDetails} /> */}
    </div>
  </div> )
}

export default RocketLeague