import React from 'react';

function Nav() {

    const categories = [
        {
            name: 'About Me',
            description:
                "Short description about myself",
        },
        {
            name: 'Portfolio',
            description:
                "Project List",
        },
        {
            name: 'Contact',
            description:
                "Let's get in touch",
        },
        {
            name: 'Resume',
            description:
                "Official resume",
        },
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <nav>
            <ul className="flex-row">
                {/* <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li> */}
                {categories.map((category) => (
                    <li
                        className="mx-1"
                        key={category.name}
                    >
                        <span onClick={() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;