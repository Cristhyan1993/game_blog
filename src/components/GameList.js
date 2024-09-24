import React, { useEffect, useState } from 'react'
import GameListCard from './GameListCard'
import "./GameList.css"

const GameList = () => {
    const [games, setGames] = useState([])
    const API_key = process.env.REACT_APP_API_KEY
    const user_input = "crash bandicoot"

    async function getGames() {
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${API_key}&search=${user_input}&page_size=9`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data.results)
            setGames(data.results)
        } catch (error) {
            console.error('Error', error)
        }
    }
    useEffect(() => {
        getGames()
    }, [])
    return (
        <div className='gameList-container'>
            <h1>GameList</h1>
            <div className='grid-container'>
                {games.map((game, index) => {
                    return (
                        <GameListCard game={game} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default GameList