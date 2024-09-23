import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";
import SwiperComponent from '../components/Swiper';
import { useEffect } from 'react';


function CallofDuty() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []
  )
  const callOfDutyDetails = {
    title: "Call of Duty Modern Warefare III",
    images: {
      cover: "images/Call-of-Duty.jpg",
      gallery: [
        { imageTitle: "multiplayer stats", src: "images/Call-Of-Duty2.jpg", alt: "screenshot of multiplayer stats" },
        { imageTitle: "warzone stats", src: "images/Call-Of-Duty3.jpg", alt: "screenshot of warzone stats" },
        { imageTitle: "loadout 1", src: "images/Call-Of-Duty4.jpg", alt: "screenshot of stg loadout" },
        { imageTitle: "loudout 2", src: "images/Call-Of-Duty5.jpg", alt: "screenshot of superi loadout" },
        { imageTitle: "class setup", src: "images/Call-Of-Duty6.jpg", alt: "screenshot of warzone class setup" },
      ]
    },
    videos: [
      { videoTitle: "Warzone Victories & Squad Wipes", url: "Cq4qSPEBb5w", description: "Montage of MW3 online gameplay" },
    ],
    heroText: "View my loadout & gameplay",
    gameReview: {
      gameOverview: 'Call of Duty: Modern Warfare III (MW3) is the latest instalment in the beloved Modern Warfare series, continuing the narrative and gameplay innovations that have made the franchise a global phenomenon. Set to build on the success of its predecessors, MW3 aims to deliver an immersive and thrilling experience both in its single-player campaign and its expansive multiplayer modes.',
      gameplay:"The online multiplayer in Call of Duty: Modern Warfare III (MW3) expertly balances familiarity with fresh innovations. The game features a diverse selection of maps, combining beloved classics such as Favela, Dome, Rust, and Shipment with exciting new designs. Warzone III has also evolved, with significant improvements that enhance the experience. The gameplay remains fast-paced and intense, focusing on both strategy and survival. New additions, like the revamped Gulag system and dynamic weather effects, impact visibility and tactical decisions. Combat is fluid and engaging, demanding both tactical positioning and quick reflexes.",
      controls: "Advanced movement controls—such as sliding, tactical sprinting, and climbing—are well-executed and feel smooth. The timing and responsiveness of these movements are crucial for high-stakes combat, enhancing the overall fluidity of gameplay.",
      difficulty: {
        description: "The difficulty in MW3’s online game modes varies significantly, offering a broad spectrum of challenges. As a long-time player who has been engaged with every Call of Duty since Modern Warfare 4 on the PS3, I’ve encountered a diverse range of opponents. Players can range from newcomers who might adopt more passive strategies—such as crouching or remaining prone for much of the match—to experienced competitors who skilfully exploit movement mechanics like dropshotting and quickscoping. This range of skill levels ensures that every match is dynamic and requires continuous adaptation to different playstyles and tactics.",
        rating: 6
      },
      multiplayer: "MW3 strikes a solid balance in weapon effectiveness and player abilities. While some weapons and perks may occasionally feel overpowered or underwhelming—leading to frustrations and repetitive loadouts in Warzone—the overall balance is commendable. The killstreaks mix classic and new options, with the Juggernaut standing out as a personal favourite. Multiplayer mode offers engaging combat with a well-rounded mix of familiar and novel elements. Warzone delivers a compelling battle royale experience. The Resurgence mode, with its faster pace, is particularly enjoyable. The dynamic weather system introduces a new layer of strategy, affecting tactics and visibility. The game generally runs smoothly, though occasional bugs, such as items locking out and becoming unpickable, can be frustrating. New features like the redeploy beacon and tactical stance for weapon handling are excellent additions, enhancing the gameplay experience.",
      conclusion: {
        description: "Call of Duty: Modern Warfare III continues the franchise’s legacy with engaging multiplayer modes and a refined Warzone experience. While I don't engage with the campaign mode, preferring the competitive aspects of Call of Duty, the new features in MW3 have significantly increased my playtime and engagement with the game. Skill-based matchmaking remains a concern, occasionally leading to frustrating experiences, but overall, MW3 offers a dynamic and compelling experience for both new and returning players.",
        score: 8
      }
    },
    reviewDate: "18/09/2024",
  }

  return (
    <div>
      <HeroSection
        gameDetails={callOfDutyDetails}
      />
      <div className="main">
        <GameDetails gameDetails={callOfDutyDetails} />
        <SwiperComponent gameDetails={callOfDutyDetails} />
        <VideoCards cardDetails={callOfDutyDetails} />
      </div>
    </div>
  )
}

export default CallofDuty