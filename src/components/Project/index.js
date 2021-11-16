import React, { useState } from 'react';
import Card from "react-bootstrap/Card";

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    // const image = currentProject.image;
    // const techs = currentProject.technologies;
    // const gitLink = currentProject.github;

    // const currentProject = {
    //     name: "portfolio",
    //     description:
    //     "list of my projects including their respective images, titles, links, and github repositories"
    // };

    return (
        <Card>
            <Card.Img 
                src={require('../../assets/small/food/0.jpg')}
                // className={card-image}
            />
            <Card.Body>
                <Card.Title className="card-title">{name}</Card.Title>
                <Card.Text className="card-text">{description}</Card.Text>
                <Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
                {/* <Card.Text className="card-techs">{getTechs(techs)}</Card.Text> */}
                {/* <Card.Link href={appLink} target="_blank" className="card-link">
                    {name} App
                </Card.Link>
                <br></br>
                <Card.Link href={gitLink} target="_blank" className="card-link">
                    {name} Github
                </Card.Link> */}
            </Card.Body>
        </Card>
    );
}

export default Project;