import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Project(props) {
    const currentCategory = {
        name: "projects",
        description:
        "list of my projects including their respective images, titles, links, and github repositories"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
            {/* eslint-disable-next-line */}
                <img    
                    src={photo}
                    alt="Project #1 Picture"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Project;