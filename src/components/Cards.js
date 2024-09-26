import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='component-container' id='cards'>
      <div className='cards__container'>
      <div className='text-container center-text'>
      <h1>Check out some of my favourite games!</h1>
      <h2>Click on a game to view gameplay and other info. </h2>  
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