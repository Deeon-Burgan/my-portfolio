import React from 'react'
import About from './About'
import './HomePage.scss'
import Socials from '../Socials/Socials'

export default function HomePage() {
    return (
        <div className='container' id='home-container'>
            <About />
            <Socials />
        </div>
    )
}
