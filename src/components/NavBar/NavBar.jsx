import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import fae from './faeface.png'

export default function NavBar() {
    return (
        <nav className='NavBar'>
            <Link to='/'><img src={fae} alt='my dogs face' className='logo'/></Link>
            <div className='NavLinks'>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}
