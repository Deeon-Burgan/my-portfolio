import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import fae from './faeface.png'

export default function NavBar() {
    return (
        <nav className='NavBar'>
            <Link to='/' exact><img src={fae} alt='my dogs face' className='logo'/></Link>
            <div className='NavLinks'>
                <Link to='/about' exact>About</Link>
                <Link to='/projects' exact>Projects</Link>
                <Link to='/contact' exact>Contact</Link>
            </div>
        </nav>
    )
}
