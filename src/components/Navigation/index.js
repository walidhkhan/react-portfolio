import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }

    return (
        <nav>
            <ul className="flex-row">
                {pages.map((page) => (
                    <li className={`mx-1 ${currentPage.name === page.name && 'navActive'
                        }`} key={page.name}>
                        <span
                            onClick={() => {
                                setCurrentPage(page)
                            }}
                        >
                            {capitalizeFirstLetter(page.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;