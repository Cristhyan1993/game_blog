import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import YoutubeVideo from './YoutubeVideo';
import "./VideoCards.css"

const VideoCards = ({ cardDetails }) => {
    return (
        <div className='card-container'>
        <div className="grid-container">
            {cardDetails.videos.map(video => {
                return (
                    <div className='card_item'>
                        <h2>{video.videoTitle}</h2>
                        <div className='video'>
                            <YoutubeVideo url={video.url} />
                        </div>
                        <div className='card_item_description'>
                            <h3>{video.description}</h3>
                        </div>

                    </div>
                )
            })}
        </div></div>
    )
}

export default VideoCards