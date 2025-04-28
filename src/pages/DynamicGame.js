import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../components/DynamicGame.css"
import '../App.css'
import { Box, Grid, styled, Typography } from '@mui/material'

const BoxItem = styled(Box)(() => ({
    borderRadius: "0.5rem",
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
    padding: 20,
    textAlign: "center",
}))

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
                <Box display="flex" flex="1">
                    <Box display="flex" flexDirection="column" gap={2}>
                        <Typography variant='h2' textTransform="uppercase">{gameDetails.name}</Typography>
                        <Box display="flex" flexWrap="wrap" width="100%" justifyContent="space-around">
                            {gameDetails.ratings ? gameDetails.ratings.map((rating, ratingIndex) => {
                                return (
                                    <Box textAlign="center" key={ratingIndex} id={rating.title} >
                                        <Typography variant='h6' textTransform="uppercase">{rating.title}</Typography>
                                        <Typography>{rating.count}</Typography>
                                    </Box>
                                )
                            }) : "loading"}
                            <Box textAlign="center">
                                <Typography variant='h6' textTransform="uppercase">Metacritic</Typography>
                                <Typography>{gameDetails.metacritic}</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" gap={2} sx={{flexDirection: {xs:"column", md:"row"}}}>
                            <BoxItem flex="2" bgcolor="primary.main">
                                <Typography >Description:</Typography>
                                <Typography color='text.secondary'>{gameDetails.description_raw}</Typography>
                            </BoxItem>
                            <Box display="flex" flexDirection="column" flex="1" gap={2}>
                                <BoxItem bgcolor="secondary.main">
                                    <Typography>Release Date:</Typography>
                                    <Typography color='text.secondary'>{gameDetails.released}</Typography>
                                </BoxItem>
                                <BoxItem bgcolor="secondary.dark">
                                    <Typography>Genre:</Typography>
                                    {gameDetails.genres ? gameDetails.genres.map((genre, genreIndex) => {
                                        return (
                                            <Typography color='text.secondary' key={genreIndex}>{genre.name}</Typography>
                                        )
                                    }) : "loading"}
                                </BoxItem>
                                <BoxItem bgcolor="secondary.main">
                                    <Typography>Developer:</Typography>
                                    {/* this is an array. might need to change if there are multiple developers */}
                                    <Typography color='text.secondary'>{gameDetails.developers ? gameDetails.developers[0].name : "loading"}</Typography>
                                </BoxItem>
                                <BoxItem bgcolor="secondary.dark">
                                    <Typography>Platforms:</Typography>
                                    <Typography>{gameDetails.parent_platforms ? gameDetails.parent_platforms[0].name : "loading"}</Typography>
                                    {gameDetails.parent_platforms ? gameDetails.parent_platforms.map((platform, platformIndex) => {
                                        return (
                                            <Typography color='text.secondary' key={platformIndex}>{platform.platform.name}</Typography>
                                        )
                                    }) : "loading"}
                                </BoxItem>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box flex="1">           
                        <img src={gameDetails.background_image} alt="background of game" width="100%" />
                    <Grid container spacing={1}>
                        {gameScreenshots.map((screenshot, index) => {
                            return (
                                <Grid size={{xs: 12, md: 6}}>
                                <img src={screenshot.image} alt="screenshot of game" key={index} width="100%"/>
                           </Grid> )
                        })}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default DynamicGame