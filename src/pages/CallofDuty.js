import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";
import SwiperComponent from '../components/Swiper';


function CallofDuty() {
  const callOfDutyDetails = {
    title: "Call of Duty Modern Warefare 3",
    images: {
      cover: "images/Call-of-Duty.jpg",
      gallery: [
        { imageTitle: "", src: "images/Call-Of-Duty2.jpg", alt: "" },
        { imageTitle: "", src: "images/Call-Of-Duty3.jpg", alt: "" },

      ]
    },
    videos: [
      { videoTitle: "", url: "", description: "" },
    ],
    heroText: "View my rank & gameplay",
    gameReview: {
      gameOverview: '',
      difficulty: {
        description: "",
        rating: 6
      },
      multiplayer: "",
      conclusion: {
        description: '',
        score: 8
      }
    },
  }

  return (
    <div>
      <HeroSection
        gameDetails={callOfDutyDetails}
      />
      <div className="main">
        <GameDetails gameDetails={callOfDutyDetails} />
        <SwiperComponent gameDetails={callOfDutyDetails} />
        {/* <VideoCards cardDetails={callOfDutyCards} /> */}
      </div>
    </div>
  )
}

export default CallofDuty