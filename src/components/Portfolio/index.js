import React from 'react';
import Project from '../Project';
// import readMePhoto from '../../assets/project-pics/'

function Portfolio() {
    const projects = [
        {
            name: 'Readme Generator',
            description: 'This is a README.md generator',
            image: 'readme-pic.png',
            technologies: [
                'JS',
                'Inquirer package',
                'Markdown'
            ],
            github: 'https://github.com/walidhkhan/professional-readme-generator',
        },
        {
            name: 'Weather Dashboard',
            description: "Weather app which uses the openweather API to allow users to search a city's current weather conditions and a 5 day forecast",
            image: 'weatherdashboard-pic.png',
            technologies: [
                'JS',
                'CSS',
                'Openweather API'
            ],
            github: 'https://github.com/walidhkhan/weather-dashboard',
        },
        {
            name: 'AlltheFeelz',
            description: 'This is my first full-stack web project',
            image: 'allthefeelz-pic.jpg',
            technologies: [
                'JS',
                'bcrypt',
                'express',
                'express-session-sequelize',
                'my-sql2',
                'sequelize',
                'bootstrap'
            ],
            github: 'https://github.com/JasJohn3/AlltheFeelz',
        },
    ]
    return( 
        <section>
            <div className="center">
                <h1> My Portfolio </h1>
            </div>
            <div>
                <ul className="flex-row">
                    <li><Project projects={projects[0]}></Project></li>
                    <li><Project projects={projects[1]}></Project></li>
                    <li><Project projects={projects[2]}></Project></li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;