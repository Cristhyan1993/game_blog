import React from 'react'
import "./Text.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'


const MoreGames = () => {
    return (
        <div className='component-container' id='moreGames'>
            <div className='component-left'>
                <div className='image-container'>
                    <img src="/images/Yu-Gi-Oh-Wallpaper.jpg" alt="yugioh wallpaper" />
                </div>
            </div>
            <div className='component-right'>
                <div className='text-container' id='more-games'>
                    <h1 className='center-text'>More Games</h1>
                    <p>* Yet to be reviewed</p>
                    <ul>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            Batman: Arkham Knight*
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            Fall Guys*
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            South Park: The Fractured but Whole*
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            Crash Bandicoot N. Sane Trilogy*
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            Crash Bandicoot 4: It's About Time*
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            Pokemon Brilliant Diamond*
                        </li>
                    </ul>
                </div></div>

        </div>
    )
}

export default MoreGames