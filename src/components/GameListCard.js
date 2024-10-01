import React from 'react'
import "./GameList.css"
import Platform from './Platform'
import { Link } from 'react-router-dom'

const GameListCard = ({ game }) => {

    return (
        <div className='card-container'>
        <Link to={`/games/${game.id}`} className='links'>
            <h2>{game.name}</h2></Link>
            <h3>{game.released}</h3>
            <Link to={`/games/${game.id}`}>
            <img src={game.background_image} alt="background of game" className='link-image'/>    
            </Link>
            

            <div className='description-top'>
                <div className='platforms'>
                    {game.parent_platforms.map((gamePlatform, platform_index) => {
                        return (
                            <Platform key={platform_index} platformName={gamePlatform.platform.name} />
                        )
                    })}
                </div>
                <h3>{game.metacritic}</h3>
            </div>
            <div className='genre'>
                <h3 id='title'>Genre:</h3>
                {game.genres.map((genre, genreIndex) => {
                    return (
                        <h3 key={genreIndex}>{genre.name}</h3>
                    )
                })}
            </div>
            
        </div>

    )
}

export default GameListCard
