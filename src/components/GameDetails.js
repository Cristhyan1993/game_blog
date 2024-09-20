import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation } from '@fortawesome/free-brands-svg-icons'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import './GameDetails.css'

function GameDetails(props) {
  return (
    <div className='game-details'>
      <div className='heading'>
        <h1>{props.gameDetails.title}</h1>
        <p>Date Reviewed: {props.gameDetails.reviewDate}</p>
      </div>
      <h3>Platform: <FontAwesomeIcon icon={faPlaystation} /></h3>
      <h2>Game Overview:</h2>
      <p>{props.gameDetails.gameReview.gameOverview}</p>
      <h2>Gameplay:</h2>
      <p>{props.gameDetails.gameReview.gameplay}</p>
      <h2>Controls:</h2>
      <p>{props.gameDetails.gameReview.controls}</p>
      <h2>Difficulty:</h2>
      <p>{props.gameDetails.gameReview.difficulty.description}</p>
      <h2>Multiplayer:</h2>
      <p>{props.gameDetails.gameReview.multiplayer}</p>
      <h2>Conclusion:</h2>
      <p>{props.gameDetails.gameReview.conclusion.description}</p>
      <div className='ratings-container'>
        <div className='ratings-item'>
          <h2>My Score:</h2>
          <p>{props.gameDetails.gameReview.conclusion.score}/10 <i className="fa-solid fa-star star" /></p>
        </div>
        <div className='ratings-item'>
          <h2>Difficulty rating:</h2>
          <p>{props.gameDetails.gameReview.difficulty.rating}/10 <i className="fa-solid fa-fire fire" /></p>
        </div>
      </div>
    </div>
  )
}

export default GameDetails