import React from 'react'

export default function Projects() {
    return (
        <div className='container'>
            <h1>My projects</h1>
            <ul className="projects-menu">
                <li className="project-menu-link">Web</li>
                <li className="project-menu-link">Games</li>
            </ul>

            <div className="projects-container">
                <div className="project-display">
                    <img src="https://static.wixstatic.com/media/b5ed1f_28071923bf584507920a09525a8d44e0~mv2.jpg/v1/fill/w_521,h_369,al_c,lg_1,q_80/pico_JPG.webp" alt="" />
                    <h3>Project Title</h3>
                </div>
            </div>
        </div>
    )
}
