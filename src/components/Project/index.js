import React, { useState } from 'react';
import Card from "react-bootstrap/Card";

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const technologies = currentProject.technologies;
    const githubLink = currentProject.github;

    // const currentProject = {
    //     name: "portfolio",
    //     description:
    //     "list of my projects including their respective images, titles, links, and github repositories"
    // };

    function getTechList(techArray) {
        let technologiesList = "";

        for (var i = 0; i < techArray.length; i++) {
            if (i === techArray.length - 1) {
                technologiesList += techArray[i];
            } else {
                technologiesList += techArray[i] + ", ";
            }
        }

        return technologiesList;
    }

    return (
        <Card>
            <Card.Img 
                variant="top"
                src={require(`../../assets/project-pics/${image}`)}
                className="card-image"
            />
            <Card.Body>
                <Card.Title className="card-title">{name}</Card.Title>
                <Card.Text className="card-text">{description}</Card.Text>
                <Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
                <Card.Text className="card-techs">{getTechList(technologies)}</Card.Text>
                {/* <Card.Link href={appLink} target="_blank" className="card-link">
                    {name} App
                </Card.Link>
                <br></br> */}
                <Card.Link href={githubLink} target="_blank" className="card-link">
                    {name} Github
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Project;