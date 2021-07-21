import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import ProjectDisplay from './ProjectDisplay/ProjectDisplay'
import './Projects.scss'
import {init} from 'ityped'

export default function Projects() {

    const [state, setState] = useState({
        projectName:'test',
        projectDescription:'',
        projectImage: '',
        projectGithub: '',
        projectLink: ''
    })

    const onMouseOver = (data) =>{
        if(state !== data){
            setState({
                ...state, 
                data
            })
        }
    }

    const data = {
        PicoTanks:{
            projectName:'Pico Tanks',
            projectDescription:'Joined Panda Arcade temporarily to help them work towards publisher deadlines',
            projectTasks: ['Replace unneeded SDKs and implement new ones required by publisher', 'Create new mechanics to monetize already present ones', 'Edit UI on multiple screens'],
            projectImage: 'https://static.wixstatic.com/media/b5ed1f_52529cfe24504fde927f94fbb6eb43a4~mv2.png/v1/fill/w_307,h_306,q_90/b5ed1f_52529cfe24504fde927f94fbb6eb43a4~mv2.webp',
            projectGithub: '',
            projectLink: 'https://www.picotanks.com',
            projectVideo:'https://www.youtube.com/embed/BmjuDvCMfq8'
        },
        Archon:{
            projectName:'Archon',
            projectDescription:'As part of Magic Missile, I worked on this project to produce a working beta that was to be shown to potential investors',
            projectTasks: ['Implement enemy AI', 'Implement follower AI and movement behaviour', 'Create dialogue system', 'Assist in game and level design'],
            projectImage: 'https://static.wixstatic.com/media/b5ed1f_fc193a273c2c41c791c76288cc17fb15~mv2_d_8000_4500_s_4_2.png/v1/fill/w_307,h_306,q_90/b5ed1f_fc193a273c2c41c791c76288cc17fb15~mv2_d_8000_4500_s_4_2.webp',
            projectGithub: '',
            projectLink: '',
            projectVideo:''
        },
        HarvestHands:{
            projectName:'Harvest Hands',
            projectDescription:'As part of Magic Missile, we were contracted to work on another companies project to help them develop a working beta to show to investors',
            projectTasks: ['Manage teams to ensure we meet deadlines', 'Contact client to keep the up to speed with how the project is going', 'Assist with programming, and act as QA'],
            projectImage: 'https://static.wixstatic.com/media/b5ed1f_00862955fb404c398d7afd4734950167~mv2.png/v1/fill/w_307,h_306,fp_0.51_0.61,q_90/b5ed1f_00862955fb404c398d7afd4734950167~mv2.webp',
            projectGithub: '',
            projectLink: 'https://www.harvesthands.com',
            projectVideo:''
        },
        ColorsCubed:{
            projectName:'Colors Cubed',
            projectDescription:'A personal project that I decided to make so I could experience releasing something on the Google Play Store',
            projectTasks: ['Design entire project', 'Create the game using Unity', 'Organize developer accounts on google play, and release'],
            projectImage: 'https://lh3.googleusercontent.com/FJULnXYxJ_Vbg0ITDswhiFLrAuuqLrGtEPbZgCGcUiIr3SAvB4rnpO8FGdXBNDP6mw',
            projectGithub: '',
            projectLink: '',
            projectVideo:''
        },
        DDStonks:{
            projectName:'DDStonks',
            projectDescription:'A 2-day hackathon, where I worked alongside Dean Raguso, to create a Ruby on Rails website that shows stock information of RuneScape items, using the RuneScape GE API',
            projectTasks: ['Design and create front-end', 'Implement graphs using Gems, and data from RuneScape API', 'Help with creation of models and controllers'],
            projectImage: 'https://dd-stonks.herokuapp.com/assets/logo-f3d07150d5c60f03e002484f3a3e99b241725d3077386ea5a44a5059a3929155.png',
            projectGithub: '',
            projectLink: 'https://dd-stonks.herokuapp.com/',
            projectVideo:''
        },
        LootersExchange:{
            projectName:'Looters Exchange',
            projectDescription:'A 2-way marketplace created using Ruby on Rails, as a requirement of my full-stack web development course',
            projectTasks: ['Setup postgreSQL database', 'Design and create front-end', 'Setup Rails controllers, models, and views'],
            projectImage: 'https://i.ibb.co/N74L8m6/Untitledoasfaoifsn.jpg',
            projectGithub: '',
            projectLink: 'https://glacial-taiga-78214.herokuapp.com/',
            projectVideo:''
        }
    }

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            strings:["My Projects"],
            loop:false
        });
    }, [])

    return (
        <div className='container' id='projects-container'>
            <h1 ref={textRef}></h1>
            {/* <ul className="projects-menu">
                <li className="active">Web</li>
                <li>Games</li>
            </ul> */}

            <div className="projects-container">
                {Object.keys(data).map((key)=>{
                    return <ProjectDisplay data={data[key]} setState={setState} />
                })}
            </div>
        </div>
    )
}
