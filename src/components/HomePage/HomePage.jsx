import React from 'react'
import About from './About'
import './HomePage.css'
import Socials from '../Socials/Socials'

export default function HomePage() {
    return (
        <>
        <body className='container' id='home-container'>
            <About />
            <Socials />
        </body>
        </>
    )
}
