import React from 'react'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";
import SwiperComponent from '../components/Swiper';
import { useEffect } from 'react';


function RocketLeague() {
  useEffect(() => {
    window.scrollTo(0, 0)
    console.log("scroll is working")
  }, []
  )
  const rocketLeagueDetails = { 
    title: "Rocket League",
    images: {
      cover: "images/Rocket-League.jpg",
      gallery:[
        {imageTitle:"", src:"images/Rocket-League2.jpg", alt:""},
        {imageTitle:"", src:"images/Rocket-League3.jpg", alt:""},
        
      ]
    },
    videos: [
      { videoTitle: "Rocket League Best Goals", url: "-RuUcCcpgu8", description: "Montage of best goals scored on Rocket League" },
    ],
    heroText: "View my rank",
    gameReview: {
      gameOverview:'Rocket League on the PlayStation 4 is an exhilarating hybrid of soccer and vehicular acrobatics that delivers non-stop excitement. Developed by Psyonix, this unique game combines fast-paced gameplay with precision controls and intense, multiplayer action. With simple mechanics but a high skill ceiling, Rocket League appeals to both casual gamers and competitive players alike.',
      gameplay:"On the PlayStation 4, Rocket League runs smoothly, maintaining a solid frame rate even in chaotic moments. The vibrant arenas, coupled with the sleek car designs, make for a visually appealing experience. Rocket League is corss platform which is great if you want to play with freinds on other consoles.",
      controls:"Rocket League’s controls may seem simple at first, but mastering them takes time and precision. As you climb the ranks in competitive play, it's essential to customize your control bindings, especially for advanced moves like air rolls",
      difficulty: {
        description:"The higher your rank, the more intense the competition becomes, with faster-paced matches and players showcasing exceptional aerial control. The game’s difficulty scales naturally with your progression, pushing you to constantly refine your skills and adapt to the increasingly tactical, high-speed gameplay",
        rating: 7
      },
      multiplayer:"Rocket League truly shines in its multiplayer modes. Whether you're teaming up with friends or going solo, the online community is robust, with plenty of players at all skill levels. Psyonix has also implemented a cross-platform feature, so you can play with friends across different consoles and PCs, which adds a great deal of flexibility. The competitive ranking system is well-balanced, providing rewarding progression for those looking to improve their skills",
      conclusion:{
        description:'Rocket League on the PS4 is a blast to play, offering a unique blend of competitive sports and vehicular mayhem that’s unlike anything else. Whether you’re casually enjoying a match with friends or grinding through the ranked ladder, Rocket League is endlessly fun and rewarding. One of Rocket League’s standout features is its extensive car customization options. You can personalize everything from decals and boost trails to goal celebrations, allowing for a unique and stylish look on the field. However, while there’s plenty to unlock through gameplay, some of the best cosmetic items are locked behind a paywall, which may be disappointing for players looking to fully customize their ride without spending extra.',
        score: 8
      }
    },
    reviewDate: "18/09/2024",
  }

 
  return (
    <div>
    <HeroSection
      gameDetails={rocketLeagueDetails}
    />
    <div className="main">
      <GameDetails gameDetails={rocketLeagueDetails} />
      <SwiperComponent gameDetails={rocketLeagueDetails}/>
      <VideoCards cardDetails={rocketLeagueDetails} />
    </div>
  </div> )
}

export default RocketLeague