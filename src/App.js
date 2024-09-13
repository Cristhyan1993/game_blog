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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import SignUp from './Components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={ <Home />}/>
      <Route path='/aboutme' exact element={ <AboutMe />}/>
      <Route path='/ctr' exact element={ <Ctr />}/>
      <Route path='/rocketleague' exact element={ <RocketLeague />}/>
      <Route path='/callofduty' exact element={ <CallofDuty />}/>
      <Route path='/fifa' exact element={ <Fifa />}/>
      <Route path='/eldenring' exact element={ <EldenRing />}/>
      {/* <Route path='/sign-up' exact element={ <SignUp />}/> */}
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
