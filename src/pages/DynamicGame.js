import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../components/Text.css"
import "../components/DynamicGame.css"
import '../App.css'
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
            console.log(data)
            setGameDetails(data)
        } catch (error) {
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

            setGameScreenshots(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getGameDetails()
        getGameScreenshots()
    }, [])

    return (
        <div className='main'>
            <div className='component-container'>
                <div className='component-left' id='flex1'>
                    <div className='dg-text-container'>
                        <h1>{gameDetails.name}</h1>
                        <div className='rating-container'>
                            {gameDetails.ratings ? gameDetails.ratings.map((rating, ratingIndex) => {
                                return (
                                    <div key={ratingIndex} className='rating-item' id={rating.title}>
                                        <h3>{rating.title}</h3>
                                        <h2>{rating.count}</h2>
                                    </div>
                                )
                            }) : "loading"}
                            <div className='rating-item'>
                                <h3>Metacritic</h3>
                                <h2>{gameDetails.metacritic}</h2>
                            </div>
                        </div>
                        <div className='dg-text-component'>
                            <div className='dg-text-component-left'>
                                <h4>Description:</h4>
                                <p>{gameDetails.description_raw}</p>
                            </div>
                            <div className='dg-text-component-right'>
                                <div className='rating-item'>
                                    <h4>Release Date:</h4>
                                    <p>{gameDetails.released}</p>
                                </div>
                                <div className='rating-item'>
                                    <h4>Genre:</h4>
                                    {gameDetails.genres ? gameDetails.genres.map((genre, genreIndex) => {
                                        return (
                                            <p key={genreIndex}>{genre.name}</p>
                                        )
                                    }) : "loading"}
                                </div>
                                <div className='rating-item'>
                                    <h4>Developer:</h4>
                                    {/* this is an array. might need to change if there are multiple developers */}
                                    <p>{gameDetails.developers ? gameDetails.developers[0].name : "loading"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='component-right' >
                    <div className='image-container'>
                        <img src={gameDetails.background_image} alt="background of game" />
                    </div>
                    <div className='grid-container-images'>
                        {gameScreenshots.map((screenshot, index) => {
                            return (
                                <img src={screenshot.image} alt="screenshot of game" className='grid-item-images' key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DynamicGame