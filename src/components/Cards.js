import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faStar, faVideo } from '@fortawesome/free-solid-svg-icons'

function Cards() {
  return (
    <div className='component-container' id='cards'>
      <div className='cards__container'>
      <div className='text-container center-text'>
      <h1>Check out some of my <span className='span-word'>favourite</span> games!</h1>
      <div className='icons-wrapper'>
        <ul className='icons-container'>
          <li className='list-item-vertical'><FontAwesomeIcon icon={faPenToSquare} className='icon'/>Review</li>
          <li className='list-item-vertical'><FontAwesomeIcon icon ={faStar} className='icon'/>Score</li>
          <li className='list-item-vertical'><FontAwesomeIcon icon ={faVideo} className='icon'/>Gameplay</li>
        </ul>
      </div>
      <h2>Dive into my world of gaming by selecting a game below to check out my <span className='span-word'>latest reviews</span> and other info.</h2>  
      </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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
          </ul>
          <ul className='cards__items'>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;