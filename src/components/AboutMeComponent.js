import React from 'react'
import { Link } from 'react-router-dom'
import "./Text.css"
import './AboutMeComponent.css'

const AboutMeComponent = () => {
    return (<>
        <div className='component-container' id='flex-col'>
            <div className='aboutme-part1'>
                <div className="component-left">
                    <div className='text'>
                        <h1>About Me</h1>
                        <p>
                            Welcome to my corner of the gaming universe! I'm Cris a lifelong gamer with a passion for all things PlayStation. From epic single-player adventures to adrenaline-pumping multiplayer experiences, I’ve been exploring every corner of the PlayStation ecosystem for years.
                        </p>

                        <h2>
                            My Favourite games
                        </h2>
                        <p>
                            Two games that hold a special place in my heart are <span id="bold">Elden Ring</span> and <span id="bold">Rocket League.</span> Whether I'm battling through the dark fantasy world of Elden Ring or scoring goals in high-octane Rocket League matches, these games capture everything I love about gaming—challenging mechanics, immersive worlds, and moments of pure fun.
                        </p>
                        <p>
                            Gaming is more than just a hobby—it's a way of life. Thanks for stopping by, and happy gaming!
                        </p>
                        <div className="three-games">
                            <div className="game-item text-container">
                                <h3>Currently Playing</h3>
                                <p>Call of Duty Modern Warefare 3</p>
                            </div>
                            <div className="game-item text-container">
                                <h3>Favourite Game</h3>
                                <p>Elden Ring</p>
                            </div>
                            <div className="game-item text-container">
                                <h3>Want to Play</h3>
                                <p>Pokemon Brilliant Diamond</p>
                            </div>
                        </div>
                        <h3>Social media</h3>
                        <div className='social-icons'>
                            <Link
                                className='social-icon-link facebook'
                                id="aboutme-social-icon"
                                to='https://www.facebook.com/cristhyan.calderon/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i className='fab fa-facebook-f' />
                            </Link>
                            <Link
                                className='social-icon-link instagram'
                                id="aboutme-social-icon"
                                to='https://www.instagram.com/cristhyan93/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram' />
                            </Link>
                            <Link
                                className='social-icon-link youtube'
                                id="aboutme-social-icon"
                                to='https://www.youtube.com/@nayhtsirc'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i className='fab fa-youtube' />
                            </Link>
                            <Link
                                className='social-icon-link linkedIn'
                                id="aboutme-social-icon"
                                to='https://www.linkedin.com/in/criscalderon/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i className='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='component-right'>
                    <div className='image-container'><img src='images/PSN-Trophies.jpg' alt="drawing of ctr with cris written on-top" id='mobile-img' />
                    </div>
                </div>
            </div>
        </div>
        <div className="component-container wrap-reverse">
                <div className="component-left">
                    <div className="image-container">
                        <img src="images/Other-Interests.jpg" alt="rower and snatch" />
                    </div>
                </div>
                <div className="component-right"> <div className='text'>
                    <h2>Other Interests</h2>
                    <p>
                        CrossFit enthusiast and weightlifter. Fitness has become a huge part of my life, and I’m constantly pushing my limits in both strength and conditioning. Whether it's mastering Olympic lifts or crushing a challenging WOD, I’m always seeking ways to improve and challenge myself.</p>
                    <p>
                        CrossFit has taught me the importance of functional fitness and versatility, while weightlifting has instilled discipline, technique, and pure strength. Both have transformed the way I view health and wellness.
                    </p>
                    <p>
                        I’m also a lifelong Manchester United fan! From the highs of Premier League glory to the nail-biting moments of European football, I've stood by United through it all. There's something special about following a club with such rich history, legendary players, and unforgettable moments. For me, supporting Manchester United isn’t just about watching games—it's a passion that runs deep. Whether it's celebrating dramatic last-minute goals or enduring the tough seasons.
                    </p>
                </div>
                </div>
            </div></>
    )
}

export default AboutMeComponent