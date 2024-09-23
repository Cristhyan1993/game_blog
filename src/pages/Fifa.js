import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";
import SwiperComponent from '../components/Swiper';
import { useEffect } from 'react';


function Fifa() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []
  )
  const fifaDetails = {
    title: "EAFC 24",
    images: {
      cover: "images/Fifa24.jpg",
      gallery: [
        { imageTitle: "", src: "images/Fifa24_1.jpg", alt: "" },
        { imageTitle: "", src: "images/Fifa24_2.jpg", alt: "" },
        { imageTitle: "", src: "images/Fifa24_3.jpg", alt: "" },
        { imageTitle: "", src: "images/Fifa24_4.jpg", alt: "" },
      ]
    },
    videos: [
      { videoTitle: "", url: "", description: "" },
    ],
    heroText: "Ultimate team",
    gameReview: {
      gameOverview: "EA Sports FC 24 marks a significant evolution in the long-standing football simulation franchise, transitioning from the iconic FIFA branding to a new identity under EA Sports FC. This installment continues the tradition of delivering realistic football gameplay while introducing fresh features and innovations.",
      gameplay: "EA Sports FC 24 continues to captivate with its thrilling and immersive gameplay, blending team-building strategy with competitive action. The revamped chemistry system introduces more flexibility and depth, allowing players to experiment with various formations and strategies without being constrained by traditional chemistry links. Ultimate Team now offers enhanced customization options for kits and stadiums, enabling players to personalize their home ground, adding a distinctive touch to their team's identity. A major highlight this year is the inclusion of women players in Ultimate Team, who can now be integrated into squads. This addition enriches squad-building options and brings greater diversity to team compositions. However, the sheer volume of special player cards can be overwhelming, with frequent events pushing players to buy packs. While this year has seen a slight increase in the likelihood of obtaining icons like Rivaldo and Stoichkov, top-tier icons such as R9 and Henry remain elusive without substantial spending or daily gameplay. The reduction in Weekend League matches to 20 has made it more manageable without sacrificing your entire weekend. Additionally, while higher-rated players seem more accessible due to the abundance of packs, many items are untradeable, limiting their utility.",
      controls: 'The control mechanics in EA Sports FC 24 are largely consistent with FIFA 23, but with several notable enhancements. New skill move combinations and the Adaptive Defensive Stance feature add layers of tactical depth, allowing players to manually control those without the ball for improved offensive positioning. These additions contribute to a more nuanced and responsive control experience.',
      difficulty: {
        description: "Ultimate Team (UT) remains the most challenging mode, particularly for players who do not invest in EA Points (the in-game currency). This can put you at a disadvantage, especially in the weeks following the game's release when opponents often have superior squads. The Weekend League is highly competitive, featuring teams that have benefited from significant financial investment. The removal of online friendlies means Division Rivals is now the primary mode for skill-matched play, maintaining constant competitiveness. While Online Seasons offers a lower skill level, the frequent encounters with Real Madrid can become monotonous.",
        rating: 7
      },
      multiplayer: "Whether playing online or offline, the multiplayer experience in EA Sports FC 24 shines. The competitive nature of the mode is evident, with many players favouring finesse play styles and exploiting game mechanics. This creates a dynamic and engaging multiplayer environment where strategy and skill are key.",
      conclusion: {
        description: "EA Sports FC 24 is an engaging and competitive experience, with Ultimate Team undergoing significant changes this year. The addition of women players, a revamped chemistry system, and new playstyles enhance the mode's depth and variety. Although Ultimate Team still has elements of a pay-to-win model and remains highly competitive, the game’s aesthetics and customizable features, such as stadiums, offer a refreshing touch. For those who thrive on competition and team-building, EA Sports FC 24 provides a richly rewarding experience.",
        score: 7
      }
    },
    reviewDate: "18/09/2024",
  }

  return (
    <div>
      <HeroSection
        gameDetails={fifaDetails}
      />
      <div className="main">
        <GameDetails gameDetails={fifaDetails} />
        <SwiperComponent gameDetails={fifaDetails} />
        {/* <VideoCards cardDetails={fifaDetails} /> */}
      </div>
    </div>
  )
}

export default Fifa