import React from 'react'
import AboutMeComponent from '../components/AboutMeComponent'
import { useEffect } from 'react'


export default function AboutMe() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []
    )
    return (
        <>
            <div className='main'>
                <AboutMeComponent />
            </div>
        </>
    )
}
