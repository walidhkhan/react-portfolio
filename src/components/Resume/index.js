import React from 'react';

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div>
                <a href={require("../../assets/files/Walid-Khan-Official-2021-Resume.pdf")} download>
                    <h4>View my Resume</h4>
                </a>
            </div>
            <div>
                <h6> Proficiencies </h6>
                <h5>Front-End</h5>
                <ol>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>version control/Git</li>
                    <li>responsive design</li>
                </ol>
                <br></br>
                <h5>Back-End</h5>
                <ol>
                    <li>APIs</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>Model View Controller (MVC)</li>
                    <li>REST</li>
                    <li>Progressive Web Applications (PWA)</li>
                </ol>
                <br></br>
                <h5>Dev Tool</h5>
                <ol>
                    <li>Git</li>
                    <li>npm</li>
                    <li>Webpack</li>
                </ol>
                <br></br>
                <h5>Database</h5>
                <ol>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>NoSQL</li>
                    <li>SQLite</li>
                    <li>GraphQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ol>
            </div>
        </section>
    )
}

export default Resume;