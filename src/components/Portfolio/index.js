import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Robot Gladiator',
            description: 'This is my 1st JS app',
            image: '',
            technologies: [
                'JS'
            ],
            github: '',
        },
        {
            name: 'Robot Gladiator',
            description: 'This is my 1st JS app',
            image: '',
            technologies: [
                'JS'
            ],
            github: '',
        },
        {
            name: 'Robot Gladiator',
            description: 'This is my 1st JS app',
            image: '',
            technologies: [
                'JS'
            ],
            github: '',
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