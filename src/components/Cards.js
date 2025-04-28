import React from 'react';
import CardItem from './CardItem';
import RateReviewIcon from '@mui/icons-material/RateReview';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StarIcon from '@mui/icons-material/Star';
import { Box, Typography, styled, useTheme } from '@mui/material';
// import IconBox from '../customizedComponents/IconBox.tsx';


const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.5rem",
  gap: "0.5rem",
  padding: "1rem",
  minWidth: "150px",
  backgroundColor: theme.palette.secondary.light,
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)"
}));

function Cards() {
  const { palette } = useTheme();
  return (
    <div className='component-container' id="cards">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: "1.5rem", textAlign: "center" }}>
          <Typography variant='h3'
            sx={{
              textTransform: "uppercase",
              background: `linear-gradient(90deg, ${palette.primary.light}, ${palette.secondary.dark}, ${palette.primary.light})`,
              backgroundClip: "text",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center"
            }}>Check out some of my favourite games!</Typography>
          <Box sx={{ display: "flex", gap:"20px", maxWidth: "500px",  justifyContent: "space-around", flexWrap: "wrap"}}>
            <IconBox>
              <RateReviewIcon fontSize='large' />
              <Typography variant='h6' sx={{textTransform: "uppercase"}}>Review</Typography>
            </IconBox>
            <IconBox sx={{ backgroundColor: "secondary.main" }}>
              <StarIcon fontSize='large' />
              <Typography variant="h6" sx={{textTransform: "uppercase"}}>Score</Typography>
            </IconBox>
            <IconBox sx={{ backgroundColor: "secondary.dark" }}>
              <VideoLibraryIcon fontSize='large' />
              <Typography variant='h6' sx={{textTransform: "uppercase"}}>Gameplay</Typography>
            </IconBox>
          </Box>
          <Typography variant='h6'>Dive into my world of gaming by selecting a game below to check out my <Typography variant='h6' color="primary.dark" display="inline">latest reviews</Typography> and other info.</Typography>
        </Box>
        <Box sx={{ position: "relative", marginTop: "100px" }}>
          <Box sx={{ display: "flex", gap: "10px", flexDirection: {xs:"column", md:"row"} }}>
            <CardItem
              src='images/Crash-Team-Racing-Nitro-Fueled.jpg'
              text='Developer Time Trials.'
              label='Crash Team Racing Nitro-Fueled'
              path='/ctr'
            />
            <CardItem
              src='images/Rocket-League.jpg'
              text='View my current rank, 1vs1 and 2vs2 Gameplay.'
              label='Rocket League'
              path='/rocketleague'
            />
          </Box>
          <Box sx={{ display: "flex", gap: "10px", flexDirection: {xs:"column", md:"row"}}}>
            <CardItem
              src='images/Call-of-Duty.jpg'
              text='In-game stats and Gameplay.'
              label='Call of Duty Modern Warefare 3'
              path='/callofduty'
            />
            <CardItem
              src='images/Fifa24.jpg'
              text='Ultimate Team and Best Goals.'
              label='EAFC 24'
              path='/eafc24'
            />
            <CardItem
              src='images/Elden-Ring.jpg'
              text='Gameplay and Boss Fights.'
              label='Elden Ring'
              path='/eldenring'
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Cards;