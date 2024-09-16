import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='cards'>
      <h1>Check out some of my favourite games!</h1>
      <h2>Click on the selected game to view gameplay and other info. </h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Crash-Team-Racing-Nitro-Fueled.jpg'
              text='Developer time trials.'
              label='Crash Team Racing Nitro-Fueled'
              path='/ctr'
            />
            <CardItem
              src='images/Rocket-League.jpg'
              text='View my current rank, 1vs1 and 2vs2 gameplay.'
              label='Rocket League'
              path='/rocketleague'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Call-of-Duty.jpg'
              text='In game stats and gameplay.'
              label='Call of Duty Modern Warefare 3'
              path='/callofduty'
            />
            <CardItem
              src='images/Fifa-23.jpg'
              text='Ultimate Team and best goals'
              label='Fifa 23'
              path='/fifa'
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