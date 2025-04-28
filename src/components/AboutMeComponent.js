import React from 'react'
import { Link } from 'react-router-dom'
import BasicTabs from './utilities/BasicTabs'
import allGames from './utilities/AllGames'
import { Box, IconButton, styled, Typography } from '@mui/material'
import socialMedia from './utilities/SocialMedia'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const AboutMeBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    borderRadius: "10px",
    gap: 10,
    alignItems: "center",
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
}));

const AboutMeComponent = () => {

    const tabHeadings = ["Favourite Game", "Currently Playing", "Want to Play"];
    const tabHeadings2 = ["CrossFit", "Football"];
    const tabInfo2 = [
        {
            about: "CrossFit enthusiast and weightlifter. Fitness has become a huge part of my life, and I’m constantly pushing my limits in both strength and conditioning. Whether it's mastering Olympic lifts or crushing a challenging WOD, I’m always seeking ways to improve and challenge myself. CrossFit has taught me the importance of functional fitness and versatility, while weightlifting has instilled discipline, technique, and pure strength. Both have transformed the way I view health and wellness.",
            icon: <FitnessCenterIcon fontSize='large' /> 
        },
        {
            about: "I’m also a lifelong Manchester United fan! From the highs of Premier League glory to the nail-biting moments of European football, I've stood by United through it all. There's something special about following a club with such rich history, legendary players, and unforgettable moments. For me, supporting Manchester United isn’t just about watching games—it's a passion that runs deep. Whether it's celebrating dramatic last-minute goals or enduring the tough seasons.",
            icon: <SportsSoccerIcon fontSize='large' />
        }
    ]
    const allGamesFilter = () => {
        const favGame = allGames.filter(item => {
            return item.title === "Batman Arkham Knight"
        })
        const wantToPlay = allGames.filter(item => {
            return item.title === "Crash Bandicoot 4 It's About Time"
        })
        const currentlyPlaying = allGames.filter(item => {
            return item.title === "Pokemon Brilliant Diamond"
        })
        const tabInfo = [
            favGame[0],
            wantToPlay[0],
            currentlyPlaying[0],
        ]
        return tabInfo
    }
    allGamesFilter()

    return (
        <div className='component-container'>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "50px"
            }}>
                <Typography variant='h2'>About Me</Typography>
                <Box display="flex" gap={2} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    <AboutMeBox bgcolor="secondary.dark">
                        <Typography variant='h6'>
                            Hi!
                        </Typography>
                        <Typography color='text.secondary'>
                            Welcome to my corner of the gaming universe! I'm Cris a lifelong gamer with a passion for all things PlayStation. From epic single-player adventures to adrenaline-pumping multiplayer experiences, I’ve been exploring every corner of the PlayStation ecosystem for years.
                        </Typography>
                    </AboutMeBox>
                    <AboutMeBox bgcolor="primary.main">
                        <Typography variant='h5'>
                            My Favourite games
                        </Typography>
                        <Typography color='text.secondary'>
                            Two games that hold a special place in my heart are <Typography display="inline" color="secondary">Elden Ring</Typography> and <Typography display="inline" color='secondary'>Rocket League.</Typography> Whether I'm battling through the dark fantasy world of Elden Ring or scoring goals in high-octane Rocket League matches, these games capture everything I love about gaming—challenging mechanics, immersive worlds, and moments of pure fun.
                        </Typography>
                        <Typography color='text.secondary'>
                            Gaming is more than just a hobby—it's a way of life. Thanks for stopping by, and happy gaming!
                        </Typography>
                    </AboutMeBox>
                </Box>
                <Box display="flex" gap={2} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    <Box display="flex" flex="2">
                        <BasicTabs infoArray={allGamesFilter()} tabHeadings={tabHeadings} />
                    </Box>
                    <Box display="flex" flex="1" justifyContent="center">
                        <img className='image-container' src='images/PSN-Trophies.jpg' alt="PSN Profile" id='mobile-img' />
                    </Box>
                </Box>
                <Typography variant='h4' textTransform="uppercase">Social Media</Typography>
                <Box display="flex" gap={8}>
                    {socialMedia.map(social => {
                        return (
                            <Link key={social.name} to={social.link} target='_blank' aria-label={social.name}>
                                <IconButton>{social.icon}</IconButton>
                            </Link>
                        )
                    })}
                </Box >
                <Typography variant='h4' textTransform="uppercase">Other Interests</Typography>
                <Box display="flex" gap={2} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    <Box display="flex" flex="1">
                        <img className="image-container" src="images/Other-Interests.jpg" alt="rower and snatch" />
                    </Box>
                    <Box display="flex" flex="2">
                        <BasicTabs infoArray={tabInfo2} tabHeadings={tabHeadings2} />
                    </Box>
                </Box>
                <div >

                </div>
                <div>



                </div>
            </Box>
        </div>

    )
}

export default AboutMeComponent