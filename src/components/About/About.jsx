import React from 'react'
import './About.scss'

export default function About(){

    const myData = {
        image:'https://lucid-bhabha-55c936.netlify.app/Images/myface2.jpg',
        about:`Hey there! \n My name's Deeon, I'm a games development professional with 2 years experience in the industry.
         I completed my studies from the Academy of Interactive Entertainment in 2019, 
         and since then I have been working with an indie team I co-founded with some classmates, called Magic Missile.
         In my spare time I love creating things as well as learning, and often find myself getting into several hour long coding jams or learning sprees.
         I'm currently undertaking a coding bootcamp for full-stack web development, which is planned to finish in August of this year.`,
        skills:['C++', 'C#', 'Unity', 'JavaScript',
                'HTML', 'CSS/SCSS', 'Python', 'Statistics analysis',
                'Critical thinking', 'Project management', 'Agile', 'Jira'],
        experience:{
            'Magic Missile':{
                Title:'Programmer/Project Manager',
                Date:'2018 - Present',
                Requirements:[
                    'Managed development and programming teams to produce company and client projects',
                    'Remained in contact with clients when working on projects to ensure demands were met',
                    'Used analytics data and research to find ways to improve products for the company and clients',
                    'Managed development timelines to ensure projects would be delivered to clients on time',
                    'Organized routine testing when working on all projects in order to guarantee a high standard of quality']
            },
            'Panda Arcade':{
                Title:'Unity Generalist',
                Date:'2020',
                Requirements:[
                    'Collaborated with project management to design, build and test systems.',
                    'Joined in on regular testing on new game modes to identify and report any issues or bugs.',
                    'Worked in an existing code base to develop new features needed to improve company profits.',
                    'Replaced old SDKs, and implemented new ones required by publishers.']
            },
            'Zero Latency':{
                Title:'Game Master',
                Date:'2021 - present',
                Requirements:[
                    'Greet and direct customers on arrival to have them sign in and get excited for their game time.',
                    'Provide professional and entertaining safety briefings.',
                    'Supervise groups as they play in VR and manage any bugs/issues that may occur.',
                    'Keep track of any and all issues that occur during play time, and log them in the system.'
                ]
            },
            'JB-Hi-Fi':{
                Title:'Retail Assistant',
                Date:'2018 - Present',
                Requirements:[
                    'Provide exceptional customer service to promote customer loyalty and sales.',
                    'Provide accurate information about products, promotions, and customer programs.',
                    'Organize and pack stock on shelves, to maintain a professional appearance of the store.',
                ]
            }
        },
        education:{
            'Diploma of Information Technology':{
                Year:'2021',
                School:'Academy of Information Technology'
            },
            'Graduate Diploma of Management':{
                Year:'2019',
                School:'Academy of Interactive Entertainment'
            },
            'Advanced Diploma of Professional Game Development(Programming)':{
                Year:'2018',
                School:'Academy of Interactive Entertainment'
            }
        }
    }

    console.log(myData.skills);

    return (
        <div className='container' id='about'>
            <div id='profile-image'>
            <img src={myData.image} alt="" />
            </div>
            <div id='about-section'>
                <h3>About Me</h3>
                <p>{myData.about}</p>
            </div>
            <div id='skills-section'>
                <h3>My Skills</h3>
                <ul>
                    {myData.skills.map((skill, index)=>{
                        return <li key={index}>{skill}</li>
                    })}
                </ul>
            </div>
            <div id='experience-section'>
                <h3>My Experience</h3>
                <ul>
                    {Object.keys(myData.experience).map((job, index)=>{
                        return <div key={index}>
                            <h4>{job}</h4>
                            <p>{myData.experience[job].Title}</p>
                            <p>{myData.experience[job].Date}</p>
                            {myData.experience[job].Requirements.map((requirement, i)=>{
                                return <li key={i}>{requirement}</li>
                            })}
                        </div>
                    })}
                </ul>
            </div>
            <div id='education-section'>
                <h3>My Education</h3>
                <ul>
                    {Object.keys(myData.education).map((degree, index)=>{
                        return <div key={index}>
                            <h4>{degree}</h4>
                            <p>{myData.education[degree].Year}</p>
                            <p>{myData.education[degree].School}</p>
                        </div>
                    })}
                </ul>
            </div>
        </div>
    )
}
