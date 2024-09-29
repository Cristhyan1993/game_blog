import React from 'react'
import "./Text.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

const LandingText = () => {
    return (
        <div className='component-container' id='landingText'>
            <div className='component-left'>
                <div className='text-container'>
                    <h1>What you'll <span className="span-word">find</span></h1>
                    <h2>
                        Welcome to my-Gmz, your ultimate destination for honest, in-depth game reviews. Whether you're into action-packed adventures, immersive RPGs, or fast-paced esports, I've got it all covered.
                    </h2>
                    <ul>
                        <li className='list-item'>
                            <i class="fa-solid fa-gamepad" />
                            <p>Explore thrilling gameplay highlights</p>
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            <p>Screenshots</p>
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            <p>My in-game stats</p>
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            <p>Ultimate Team Squad</p>
                        </li>
                        <li className='list-item'><FontAwesomeIcon icon={faGamepad} />
                            <p>Call of Duty loadouts</p>
                        </li>
                    </ul>
                    <h2>
                        You can also browse through your favourite games to view their description and other information. Thanks for stopping by!
                    </h2>
                </div>
            </div>
            <div className='component-right'>
                <div className='image-container'>
                    <img src="/images/Controller-Console.png" alt="controller and console" id="mobile-img" />
                </div>

            </div>

        </div>
    )
}

export default LandingText