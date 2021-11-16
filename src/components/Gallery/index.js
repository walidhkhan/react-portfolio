import React from "react";
import PhotoList from "../PhotoList";
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
    const { currentPage } = props;
    return (
        <section>
            {/* <h1 data-testid="h1tag">{capitalizeFirstLetter(currentPage.name)}</h1> */}
            {/* <p>{currentPage.description}</p>
            <PhotoList category={currentPage.name} /> */}
        </section>
    );
}

export default Gallery;

