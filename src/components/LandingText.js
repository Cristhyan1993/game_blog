import React from 'react'
import GamesIcon from '@mui/icons-material/Games';
import { Box, styled, Typography, useMediaQuery } from '@mui/material';

const gridTemplateLargeScreens = `
    "a b b"
    "a b b"
    "c c d"
    "c c d"
    `

const gridTemplateSmallScreens = `
    "a"
    "a"
    "b"
    "b"
    "c"
    "c"
    "d"
    "d"
    `

const ListItem = styled(Box)(({ theme }) => ({
    display: "flex",
    color: theme.palette.text.secondary,
    gap: "10px",
    alignItems: "center"
}))

const BoxItem = styled(Box)(() => ({
    borderRadius: "0.5rem",
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
    padding: 20,
    textAlign: "center",
}))

const listArray = [
    "Thrilling Gameplay Highlights",
    "Screenshots",
    "In-game Stats",
    "Ultimate Team Squad",
    "Call of Duty Loadouts"
]

const LandingText = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    return (
        <div className='component-container'>
            <Box width="100%" height="100%" display="grid" gap="2rem"
                sx={isAboveMediumScreens
                    ? {
                        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                        gridTemplateRows: "repeat(4, minmax(100px, 1fr))",
                        gridTemplateAreas: gridTemplateLargeScreens
                    }
                    : {
                        gridAutoColumns: "1fr",
                        gridAutoRows: "100px",
                        gridTemplateAreas: gridTemplateSmallScreens
                    }}>
                <BoxItem
                    bgcolor="primary.main"
                    gridArea="a">
                    <Typography variant='h5' gutterBottom>Hello!</Typography>
                    <Typography gutterBottom color="text.secondary">
                        Welcome to my-Gmz, your ultimate destination for honest, in-depth game reviews.
                    </Typography>
                    <Typography color="text.secondary">Whether you're into action-packed adventures, immersive RPGs, or fast-paced esports, I've got it all covered.</Typography>
                </BoxItem>
                <BoxItem
                    bgcolor="primary.light"
                    gridArea="b">
                    <Typography variant='h5' gutterBottom>What you'll find</Typography>
                    <Typography bgcolor="primary.light" color="text.secondary" >
                        On this site, I share my honest thoughts, in-depth reviews, and insights on the latest (and classic) PlayStation games. I break down the gameplay, graphics, difficulty, and overall experience to help you decide what’s worth your time.
                    </Typography>
                </BoxItem>
                <BoxItem
                    bgcolor="primary.light"
                    gridArea="c">
                    <Typography variant='h5' gutterBottom>Including:</Typography>
                    {listArray.map(item => {
                        return (
                            <ListItem key={item}>
                                <GamesIcon fontSize='small' />
                                <Typography>{item}</Typography>
                            </ListItem>
                        )
                    })}
                </BoxItem>
                <BoxItem
                    bgcolor="primary.main"
                    gridArea="d"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <img src="/images/Controller-Console.png" alt="controller and console" height="100%" width="50%" style={{ objectFit: "fill" }} />
                </BoxItem>
            </Box>
        </div>
    )
}

export default LandingText