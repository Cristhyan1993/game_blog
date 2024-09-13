import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import GameDetails from '../components/GameDetails'
import VideoCards from "../components/VideoCards";


function EldenRing() {
  const eldenRingDetails = { 
    title: "Elden Ring",
    imgCover: "images/Elden-Ring.jpg",
    heroText: "Boss battles and more...",
    gameReview: {
      gameOverview:'"Elden Ring," the highly anticipated collaboration between FromSoftware and George R.R. Martin, arrives on the PlayStation 5 with a promise of a vast, immersive RPG experience. Merging intricate lore with a sprawling open world and challenging combat, this game offers an adventure that’s both grand and intensely rewarding.',
      gameplay:'On the PS5, "Elden Ring" delivers a seamless and engaging gameplay experience. The controls are finely tuned, allowing for precise and fluid combat that is both exhilarating and demanding. The game introduces new mechanics such as mounted combat and an expanded stealth system, adding layers of strategy to its already intricate combat. Visually, "Elden Ring" takes full advantage of the PS5’s hardware. The game features stunningly detailed environments, from lush, expansive landscapes to eerie, atmospheric dungeons. The enhanced graphics make the world feel more alive, with realistic lighting, detailed textures, and smooth animations that enhance immersion. The game’s dynamic weather and day-night cycles further contribute to its ever-changing atmosphere. The soundtrack is powerful and evocative, with orchestral scores that enhance the epic feel of the game.',
      controls: "Very similar to the Souls games with introduced features such as mounting a horse. Feels very smooth and offer a balance of precision and flexibility.",
      difficulty: {
        description:"The game presents a demanding experience especially for players who never played a Souls game but also rewarding one in its challenging combat and intricate boss battles. The game also offers the player assistance by summoning npc phantoms to aid in battle.",
        rating: 9
      },
      multiplayer:"Na - Not tried to play online",
      conclusion:{
        description:'"Elden Ring" on the PS5 is a triumph of modern RPG design. It combines the best elements of FromSoftware’s previous titles with a sprawling open world and innovative new features. The result is a game that is both visually stunning and deeply engaging. In essence, "Elden Ring" is not just a game, it is a testament to the art of crafting intricate, challenging, and immersive worlds. Its combination of stunning visuals, strategic combat, and rich storytelling makes it a standout title and definitely of my top 3 games ever.',
        score: 9
      }
    },
  }

  const eldenRingCards = [
    { videoTitle: "Messmer the Impaler Boss fight", url: "xycwWCmjVMM", description: "Boss fight Messmer the Impaler, Shadow of the Erdtree DLC" },
    ]
  return (
    <div>
    <HeroSection
      gameDetails={eldenRingDetails}
    />
    <div className="main">
      <GameDetails gameDetails={eldenRingDetails} />
      <VideoCards cardDetails={eldenRingCards} />
    </div>
  </div> 
  )
}

export default EldenRing