import React from 'react';
import './Project.scss';
import {useEffect, useState} from 'react'
import { Redirect } from 'react-router';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export default function Project(props) {

    const [currentSlide, setCurrentSlide] = useState(0);

    if(!!!props.location.state){
        return <Redirect to='/projects'/>;
    }

    const {projectName, projectDescription, projectImage, projectGithub, projectLink, projectTasks, projectVideo, projectSummary, codeSnippets} = props.location.state;


    const handleArrowPress = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < codeSnippets.length - 1 ? currentSlide + 1 : 0);
      };

    return (
        <div className="container" id='project-container'>
            <img src={projectImage} alt="image of project" />
            <h1 id ='project-title'>{projectName}</h1>
            <div id='description-tasks'>
                <div id='description'>
                    <h3>What is it?</h3>
                    <p>{projectDescription}</p>
                </div>
                <div>
                    <h3>Where did I come in?</h3>
                    <p>{projectSummary}</p>
                </div>
                <div id='tasks'>
                    <h3>What did I do?</h3>
                    <ul>
                        {projectTasks.map((task)=>{
                            return <li>{task}</li>
                        })}
                    </ul>
                </div>
            </div>
                {!!projectVideo && <iframe width="480" height="270" src={projectVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id='project-video'></iframe>}
            <div id='project-links'>
                {!!projectGithub && <a href={projectGithub} target='_blank'>GitHub</a>}
                {!!projectLink && <a href={projectLink} target='_blank'>Link to project</a>}
            </div>
            { !!codeSnippets?.length && (<div className="ImageGallery" id="projectImageGallery">
                <AiOutlineArrowLeft className='arrow left' onClick={()=> handleArrowPress(true)}/>
                <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw`}}>
                    {codeSnippets.map((pic, id)=>{
                        return <div id='snippet-container' key={id}>
                            <img src={pic} alt="" />
                        </div>
                    })}
                </div>
                <AiOutlineArrowRight className='arrow right' onClick={()=> handleArrowPress(false)}/>
            </div>)}
        </div>
    )
}
