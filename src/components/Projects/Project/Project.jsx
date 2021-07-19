import React from 'react'

export default function Project(props) {

    const {projectName, projectDescription, projectImage, projectGithub, projectLink} = props.location.state;
    return (
        <div className="container">
            <h1>{projectName}</h1>
            
        </div>
    )
}
