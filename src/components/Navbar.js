import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, List, Drawer, ListItemButton, styled, Switch, Typography, useMediaQuery, useTheme, } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { setIsDarkMode } from '../state';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

function NavBar() {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.global.isDarkMode)
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isSmallScreen)

  const handleClick = () => setClick(!click);
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  const ListNavbar = () => (
    <List sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <ListItemButton>
        <NavLink
          to="/"
          onClick={handleClick}
        >
          <Typography color="text.primary">Home</Typography>
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <NavLink
          to="/aboutme"
          onClick={handleClick}
        >
          <Typography color="text.primary" sx={{ textDecoration: "none" }}>About Me</Typography>
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <HashLink
          to="/#cards"
          scroll={el => scrollWithOffset(el, 80)}
          onClick={handleClick}
        >
          <Typography color="text.primary" sx={{ textDecoration: "none" }}>Favourite Games</Typography>
        </HashLink>
      </ListItemButton>
    </List>
  )

  return (
    <Box bgcolor="primary.dark"
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky", top: "0",
        zIndex: "20",
        padding: "0 1rem"
      }}>
      <Box sx={{ width: "1280px", height: "80px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <NavLink to="/">
          <img src="images/my-GmzLogo.png" alt="website logo" width="150px" />
        </NavLink>
        <Box padding={2} sx={{ display: "flex", alignItems: "center" }}>
          <MaterialUISwitch sx={{ m: 1 }} checked={isDarkMode} onChange={() => dispatch(setIsDarkMode(!isDarkMode))} />

          {isSmallScreen ? (
            !open ? (<MenuIcon onClick={toggleDrawer(true)} />) : (<CloseIcon onClick={toggleDrawer(true)} />)
          ) : (
            <ListNavbar />
          )}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box height="100%" bgcolor="primary.light" sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
              <ListNavbar />
            </Box>
          </Drawer>
        </Box>
      </Box>
    </Box>

  );
}

export default NavBar;