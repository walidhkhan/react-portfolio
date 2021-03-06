import React from 'react';
import avatar from '../../assets/profile-pic/Blank-Avatar.png';
function About() {

    return (
        <section>
            <div>
                <h1> About Me </h1>
            </div>
            <div>
                <img
                    // src={require('../../assets/profile-pic/Blank-Avatar.png')}
                    src={avatar}
                    alt="about-me"
                    className="photo"
                />
            </div>
            <div>
                <p> I am an aspiring web developer who started my coding journey in June 2021 with University of Arizona's online full-stack web development bootcamp program. I love learning about and working with new technologies. </p>
            </div>
        </section>
    );
}

export default About;