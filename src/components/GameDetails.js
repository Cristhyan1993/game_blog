import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation } from '@fortawesome/free-brands-svg-icons'
// import { faStar } from '@fortawesome/free-solid-svg-icons'


import './GameDetails.css'

function GameDetails(props) {
  return (
    <div className='game-details'>
        <h1>{props.gameDetails.title}</h1>
        <h3>Platform: <FontAwesomeIcon icon={faPlaystation}/></h3>
        <p>{props.gameDetails.overview}</p>
    </div>
  )
}

export default GameDetails