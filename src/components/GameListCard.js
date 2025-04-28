import React from 'react'
import Platform from './Platform'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const GameListCard = ({ game }) => {

    return (
      <Link to={`/games/${game.id}`} className='links'>
      <Box width="300px" color="text.primary" backgroundColor= "secondary.main" padding={1} borderRadius={2} height="100%" boxShadow= "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)">
        
            <Typography variant='h6' color="primary">{game.name}</Typography>
            <Typography>{game.released}</Typography>
            <Link to={`/games/${game.id}`}>
            <img src={game.background_image} alt="background of game" width="100%" height="200px"/>
                
            </Link>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box color="text.secondary" display="flex" flexWrap="wrap" gap={1}>
                    {game.parent_platforms.map((gamePlatform, platform_index) => {
                        return (
                            <Platform key={platform_index} platformName={gamePlatform.platform.name} />
                        )
                    })}
                </Box>
                <Typography bgcolor="primary.main"  padding={0.5}>{game.metacritic}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Typography>Genre:</Typography>
                {game.genres.map((genre, genreIndex) => {
                    return (
                        <Typography margin={1} key={genreIndex}>{genre.name}</Typography>
                    )
                })}
            </Box>
            
        </Box></Link>

    )
}

export default GameListCard
