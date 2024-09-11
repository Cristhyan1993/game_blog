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
    overview:"Having completed the main story including the platimun relics, CTR challanges and time trials. i tackled all the developer time trials in order to obtain the platinum playstation trophy. You can view my developer time trials in the videos below."
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
