import React from 'react'
import {Link} from 'react-router-dom'

import '../Projects.scss'

export default function ProjectDisplay(props) {
    return (
        
            <Link to={{ 
                pathname: `/project/${props.data.projectName}`, 
                state: props.data
                }} className='project-display' onMouseEnter={() => {
                    props.setState()
                }}>
                    <img src={props.data.projectImage} alt="" />
                    <h3>{props.data.projectName}</h3>
                </Link>
        
    )
}
