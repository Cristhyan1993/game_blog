import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";
import SwiperComponent from '../components/Swiper';


function Fifa() {
  const fifaDetails = { 
    title: "Fifa 23",
    images: {
      cover: "images/Fifa-23.jpg",
      gallery:[
        {imageTitle:"", src:"", alt:""},
      ]
    },
    videos: [
      { videoTitle: "", url: "", description: "" },
    ],
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

  return (
    <div>
    <HeroSection
      gameDetails={fifaDetails}
    />
    <div className="main">
      <GameDetails gameDetails={fifaDetails} />
      <SwiperComponent gameDetails={fifaDetails}/>
      {/* <VideoCards cardDetails={fifaDetails} /> */}
    </div>
  </div> 
 )
}

export default Fifa