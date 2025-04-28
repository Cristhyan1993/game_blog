import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//React-Router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Material-UI imports
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue, grey, orange, purple } from '@mui/material/colors';

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Ctr from './pages/Ctr';
import RocketLeague from './pages/RocketLeague';
import CallofDuty from './pages/CallofDuty';
import Fifa from './pages/Fifa';
import EldenRing from './pages/EldenRing';
import DynamicGame from './pages/DynamicGame';

//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { setIsDarkMode } from "./state";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isDarkMode = useSelector(state => state.global.isDarkMode)
  const dispatch = useDispatch();
  dispatch(() => setIsDarkMode(prefersDarkMode))
  
  const theme = createTheme({
    palette:{
      primary: {
       main: blue[300],
       light: blue[100],
       dark: blue[500]
      },
      secondary: {
        main: grey[300],
        light: grey[100],
        dark: grey[500]
      },
    background: {
      paper: grey[100]
    }
    },
    typography: {
      fontFamily: ["Gabarito", "sans-serif"].join(",")
    }
  });

  const darkTheme = createTheme({
    palette:{
      mode: "dark",
      primary: {
        main: purple[500],
        light: purple[200],
        dark: purple[700]
      },
      secondary: {
        main: orange[500],
        light: orange[200],
        dark: orange[700]
      }
    },
    typography: {
      fontFamily: ["Gabarito", "sans-serif"].join(",")
    }
  });

  return (
      <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <Paper elevation={0} sx={{height: "100%"}} square>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/aboutme' exact element={<AboutMe />} />
          <Route path='/ctr' exact element={<Ctr />} />
          <Route path='/rocketleague' exact element={<RocketLeague />} />
          <Route path='/callofduty' exact element={<CallofDuty />} />
          <Route path='/eafc24' exact element={<Fifa />} />
          <Route path='/eldenring' exact element={<EldenRing />} />
          <Route path='/games/:gameId' exact element={<DynamicGame/>}/>
        </Routes>
        <Footer />
        </Paper>
        </ThemeProvider>
      </Router>
  );
}

export default App;
