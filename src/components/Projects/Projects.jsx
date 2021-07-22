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
            projectDescription:`Pico Tanks is a fast-paced, energetic 3v3 tank brawler with a strong focus on team strategy.
             Design your own unique tank with thousands of possible gameplay-changing combinations. 
             Group up with your friends and compete in spectacular 3v3 battles across multiple maps and game modes!`,
            projectSummary:'I joined Panda Arcade in 2020 for a short time to assist them in completing a number of tasks that had been placed on them by an external publisher.',
            projectTasks: ['Replace unneeded SDKs and implement new ones required by publisher', 'Create new mechanics to monetize already present ones', 'Edit UI on multiple screens'],
            projectImage: 'https://static.wixstatic.com/media/b5ed1f_52529cfe24504fde927f94fbb6eb43a4~mv2.png/v1/fill/w_307,h_306,q_90/b5ed1f_52529cfe24504fde927f94fbb6eb43a4~mv2.webp',
            projectGithub: '',
            projectLink: 'https://www.picotanks.com',
            projectVideo:'https://www.youtube.com/embed/BmjuDvCMfq8',
            codeSnippets:[]
        },
        Archon:{
            projectName:'Archon',
            projectDescription:`Archon is a top-down twin-stick shooter, where you play as a mage who has the ability to steal the essence of other mages.`,
            projectSummary:`Archon was the passion project for Magic Missile, and the project that made Magic Missile come together.
             Myself and a few of my colleagues joined the team initially working on Archon to create Magic Missile. 
             Collectively we worked on Archon for the better half of 2019, 
             and eventually got it to a position where we were comfortable showing it to potential investors.
              Unfortunately after that the project was put on the backburner, and client work was taken on instead, 
              and it is still currently on hold.`,
            projectTasks: ['Implement enemy AI', 'Implement follower AI and movement behaviour', 'Create dialogue system', 'Assist in game and level design'],
            projectImage: 'https://static.wixstatic.com/media/b5ed1f_fc193a273c2c41c791c76288cc17fb15~mv2_d_8000_4500_s_4_2.png/v1/fill/w_307,h_306,q_90/b5ed1f_fc193a273c2c41c791c76288cc17fb15~mv2_d_8000_4500_s_4_2.webp',
            projectGithub: '',
            projectLink: '',
            projectVideo:'https://video.wixstatic.com/video/b5ed1f_3a669fdf1b314efcbd09a41e93977236/1080p/mp4/file.mp4'
        },
        HarvestHands:{
            projectName:'Harvest Hands',
            projectDescription:'Harvest Hands is a first person fantasy farming game where you are free  to explore and farm at your own pace, free from durability, energy systems or time limits. ',
            projectSummary:`As part of Magic Missile, we were brought on by another indie team to help them complete their project, 
            and get it ready for them to present it to potential investors. 
            We were brought on very late into development, and as such our involvement was mostly bug fixes and optimization, 
            though we did manage to create a number of new additions to the game, which brought a lot more fun to the game.`,
            projectTasks: ['Manage teams to ensure we meet deadlines', 'Contact client to keep the up to speed with how the project is going', 'Assist with programming, and act as QA'],
            projectImage: 'https://static.wixstatic.com/media/b5ed1f_00862955fb404c398d7afd4734950167~mv2.png/v1/fill/w_307,h_306,fp_0.51_0.61,q_90/b5ed1f_00862955fb404c398d7afd4734950167~mv2.webp',
            projectGithub: '',
            projectLink: 'https://www.harvesthands.com',
            projectVideo:''
        },
        ColorsCubed:{
            projectName:'Colors Cubed',
            projectDescription:'A simple color matching game for Android',
            projectSummary:`This is a little personal project of mine. I really enjoy casual games for mobile, especially color matching ones, 
                            as they're generally really popular and easy to see. I thought of a way of doing it myself, and this is what came from it.`,
            projectTasks: ['Design entire project', 'Create the game using Unity', 'Organize developer accounts on google play, and release'],
            projectImage: 'https://lh3.googleusercontent.com/FJULnXYxJ_Vbg0ITDswhiFLrAuuqLrGtEPbZgCGcUiIr3SAvB4rnpO8FGdXBNDP6mw',
            projectGithub: '',
            projectLink: '',
            projectVideo:''
        },
        DDStonks:{
            projectName:'DDStonks',
            projectDescription:'DDStonks is a web app that uses the RuneScape Grand Exchange API, to display graphs and details of in game items and their prices.',
            projectSummary:`This project is a 2-day hackathon, where I worked alongside Dean Raguso, to create a web application. 
                            We both were fans of RuneScape and the stock market, so we decided on creating an application that would essentially
                            act as parts of both. We ended up creating an application that would display information about in-game items, and their item prices, and the changes in the prices over several time frames.`,
            projectTasks: ['Design and create front-end', 'Implement graphs using Gems, and data from RuneScape API', 'Help with creation of models and controllers'],
            projectImage: 'https://dd-stonks.herokuapp.com/assets/logo-f3d07150d5c60f03e002484f3a3e99b241725d3077386ea5a44a5059a3929155.png',
            projectGithub: 'https://github.com/Deeon-Burgan/DD_Stonks',
            projectLink: 'https://dd-stonks.herokuapp.com/',
            projectVideo:''
        },
        LootersExchange:{
            projectName:'Looters Exchange',
            projectDescription:'A 2-way marketplace for in-game items',
            projectSummary:`Whilst doing my Diploma of Information Technology, one of my assignments was to create a fully working web application 
            that acted as a 2-way marketplace. I love games, so I thought of creating an application that would allow user's to initiate trades between
            eachother for in-game items, and this was what came to be.`,
            projectTasks: ['Setup postgreSQL database', 'Design and create front-end', 'Setup Rails controllers, models, and views'],
            projectImage: 'https://i.ibb.co/N74L8m6/Untitledoasfaoifsn.jpg',
            projectGithub: 'https://github.com/Deeon-Burgan/DeeonBurgan_T2A2',
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
