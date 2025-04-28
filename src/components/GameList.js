import React, { useEffect, useState } from 'react'
import GameListCard from './GameListCard'
import { Box, IconButton, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';



const GameList = () => {
    const [games, setGames] = useState([]);
    const [userInput, setUserInput] = useState("");
    const API_key = process.env.REACT_APP_API_KEY

    async function getGames() {
        // search only playstation games ordered by metacritic score
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${API_key}&page_size=9&ordering=-metacritic&platforms=187`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
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
    return (
        <div className='component-container'>
            <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" gap={5}>
                <Box display="flex" flexDirection="inherit" gap={3}>
                    <Typography variant='h3'>Game List</Typography>
                    <Typography variant='h6'>Currently displaying top-rated PlayStation 5 games ranked by Metacritic scores. Use the search bar to find your favourites, and click to discover more details, including screenshots, description and additional content. Happy searching!</Typography>
                </Box>
                <Box>
                    <form onSubmit={getGamesByTitle}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                value={userInput} placeholder="Search..." onChange={(e) => setUserInput(e.target.value)}
                            />
                            <IconButton type="submit" onClick={getGamesByTitle} sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </form>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                    {games.map((game, index) => {
                        return (
                            <GameListCard game={game} key={index} />
                        )
                    })}
                </Box>
            </Box>
        </div>
    )
}

export default GameList