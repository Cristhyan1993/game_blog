import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroSection from '../components/HeroSection';
import "../components/Text.css"
const DynamicGame = () => {
    const [gameDetails, setGameDetails] = useState([]);
    const [gameScreenshots, setGameScreenshots] = useState([])
    const params = useParams();
    const gameId = params.gameId
    const API_key = process.env.REACT_APP_API_KEY;


    async function getGameDetails() {
        try {
            const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_key}`)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setGameDetails(data)
        } catch(error) {
            console.log(error)
        } 
    }

    async function getGameScreenshots() {
        try {
            const response = await fetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${API_key}`)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data)
            setGameScreenshots(data.results)
        } catch(error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getGameDetails()
        getGameScreenshots()
    },[])
    return (<>
        
        <div className='main text-container'>
            <h2>{gameDetails.name}</h2>
            <p>{gameDetails.description}</p>
            <h3>{gameDetails.metacritic}</h3>
            <h3>{gameDetails.released}</h3>
            <img src={gameDetails.background_image} alt="background of game" height="400px"/>
            {/* this is an array. might need to change if there are multiple developers */}
            {/* <h3>{gameDetails.developers[0].name}</h3> */}
            <h3>Genre:</h3>
        </div>
        <div>
            {gameScreenshots.map((screenshot, index) => {
                return (
                    <img src={screenshot.image} alt="screenshot of game" height="200px" key={index}/>
                )
            })}
        </div>
        </>

    )
}

export default DynamicGame