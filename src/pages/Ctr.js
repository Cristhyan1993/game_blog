import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import GameDetails from "../components/GameDetails";
import VideoCards from "../components/VideoCards";

function Ctr() {
  const ctrDetails = { 
    title: "Crash Team Racing Nitro fueled",
    imgCover: "images/Crash-Team-Racing-Nitro-Fueled.jpg",
    heroText: "Developer time trials and more...",
    gameReview: {
      gameOverview:'Rev up your engines, "Crash Team Racing Nitro-Fueled" brings a polished homage to the beloved 1999 classic. This remake not only revitalizes the iconic kart racer but adds enough modern tweaks to make it a must-play for both long-time fans and newcomers alike.',
      gameplay:"The game modes offer a satisfying blend of nostalgia and innovation, with Story Mode and Time Trials feeling familiar yet fresh. Graphically, the game is a visual treat. The updated textures and vibrant colours breathe new life into the tracks and characters. Each course is meticulously designed, and the character models are both charming and detailed. The soundtrack, a mix of retro and new tunes, complements the action perfectly.",
      controls: "From the moment you start racing, it's clear that the controls are as tight and responsive as ever. The PS4 controller feels perfectly suited for the high-speed thrills of Crash Team Racing.",
      difficulty: {
        description:"The difficulty scales depending on the game mode. Story Mode being beginner friendly, the CTR and Time Relics present a challenge however the completing the time trials are definitely the biggest challenges.",
        rating: 8
      },
      multiplayer:"The local multiplayer definitely shone brighter in comparison to online. You can quickly jump into any race of choice and the gameplay is much smoother. I found the online mode a bit disappointing, mainly due to the lobby waiting time, the number of players disconnecting mid race and a few bugs.",
      conclusion:{
        description:"Overall, “Crash Team Racing Nitro-Fueled” is a thrilling and well-executed remake that pays homage to its roots while offering something new. Whether you're a fan of the original or just looking for a fun kart racer, this game is definitely worth the ride. Having completed the main story including the platinum relics, CTR challenges and time trials. I tackled all the developer time trials in order to obtain the platinum PlayStation trophy. You can view my developer time trials in the videos below.'",
        score: 8
      }
    },
  }

  const ctrCards = [
    { videoTitle: "Polar Pass", url: "ZTUTvJ4AGEU", description: "some desciprion about the video" },
    { videoTitle: "Drive Thru Danger", url: "s4_5SliIEKI", description: "some desciprion about the video" },
    { videoTitle: "Retro Stadium", url: "dSjnf1NBphM", description: "some desciprion about the video" },
    { videoTitle: "Prehistoric Playground", url: "oZaVAc_WQW0", description: "some desciprion about the video" },
    { videoTitle: "Oxide Station", url: "E5osPHhvZ8o", description: "some desciprion about the video" },
    { videoTitle: "Sewer Speedway", url: "HHLki_-WjM4", description: "some desciprion about the video" },
    { videoTitle: "Papu's Pyramid", url: "rqoXVNTPQtM", description: "some desciprion about the video" },
  ]
  return (
    <div>
      <HeroSection
        gameDetails={ctrDetails}
      />
      <div className="main">
        <GameDetails gameDetails={ctrDetails} />
        {/* <VideoCards cardDetails={ctrCards} /> */}
      </div>
    </div>
  );
}

export default Ctr;
