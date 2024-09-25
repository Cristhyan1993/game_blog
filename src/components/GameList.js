import React, { useEffect, useState } from 'react'
import GameListCard from './GameListCard'
import "./GameList.css"

const GameList = () => {
    const [games, setGames] = useState([]);
    const [userInput, setUserInput] = useState("");
    const API_key = process.env.REACT_APP_API_KEY

    async function getGames() {
        // search only playstation games ordered by metacritic score
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${API_key}&page_size=9&ordering=-metacritic&parent_platforms=2`);
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

    async function getGamesByTitle(e) {
        e.preventDefault()
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${API_key}&search=${userInput}&page_size=9`);
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
    return (<>
        <div className='text-container'>
                <h1>Game List</h1>
                <p>Currently displaying top-rated PlayStation games ranked by Metacritic scores. Use the search bar to find your favorites, and click to discover more details, including screenshots, trailers, description and additional content.</p>
            </div>
        <div className='gameList-container'>
            <div className='search-bar'>
                <form onSubmit={getGamesByTitle}>
                    <input type='text' value={userInput} placeholder="Search..." onChange={(e) => setUserInput(e.target.value)}></input>
                  
                    <i class="fa-solid fa-magnifying-glass" type="submit" onClick={getGamesByTitle}></i>
                </form>
            </div>
            <div className='grid-container'>
                {games.map((game, index) => {
                    return (
                        <GameListCard game={game} key={index} />
                    )
                })}
            </div>
        </div></>
    )
}

export default GameList