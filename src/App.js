import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//React-Router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Ctr from './pages/Ctr';
import RocketLeague from './pages/RocketLeague';
import CallofDuty from './pages/CallofDuty';
import Fifa from './pages/Fifa';
import EldenRing from './pages/EldenRing';
import DynamicGame from './pages/DynamicGame';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/aboutme' exact element={<AboutMe />} />
          <Route path='/ctr' exact element={<Ctr />} />
          <Route path='/rocketleague' exact element={<RocketLeague />} />
          <Route path='/callofduty' exact element={<CallofDuty />} />
          <Route path='/eafc24' exact element={<Fifa />} />
          <Route path='/eldenring' exact element={<EldenRing />} />
          <Route path='/:gameId' exact element={<DynamicGame/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
