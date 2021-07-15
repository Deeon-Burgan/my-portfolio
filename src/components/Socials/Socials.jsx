import React from 'react'
import {FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa'
import './Socials.css'

export default function Socials() {
    return (
        <div>
            <ul id='socials-list'>
                <li className='socials-link'><a href='https://www.linkedin.com/in/deeon-burgan-060426149/' target='_blank'><FaLinkedinIn size={20}/></a></li>
                <li className='socials-link'><a href='https://github.com/Deeon-Burgan' target='_blank'><FaGithub size={20}/></a></li>
                <li className='socials-link'><a href='https://twitter.com/Deeon_Burgan' target='_blank'><FaTwitter size={20}/></a></li>
            </ul>
        </div>
    )
}
