import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation, faXbox, faSteam } from '@fortawesome/free-brands-svg-icons'

const Platform = ({platformName}) => {
    const platform = () => {
        let result = ""
        if(platformName === "PlayStation" || platformName === "PlayStation 2" || platformName === "PlayStation 3" || platformName === "PlayStation 4" || platformName === "PlayStation 5") {
            result = <FontAwesomeIcon icon={faPlaystation}/>
        } else if(platformName === "Xbox" || platformName === "Xbox 360" || platformName === "Xbox Series S/X" || platformName === "Xbox One" ) {
            result = <FontAwesomeIcon icon={faXbox}/>
        } else if(platformName === "PC") {
            result = <FontAwesomeIcon icon={faSteam}/>
        } else if(platformName === "Nintendo Switch") {
            result = "Switch"
        } else if(platformName === "Game Boy Advance") {
            return "GBA"
        } else {
            result = platformName
        } 
        return result
    }
    const name = platform(platformName)
  return (
    <div className='platform-icon'>{name}</div>
  )
}

export default Platform