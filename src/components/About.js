import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
    <StyledAbout>
        <article className="about">
            <h2>About Me</h2>
            <div className="aboutDesc">
                <div className="text">
                <p>
                    When I was 6 years old, I built my first computer and fell in love with technology. I always had a love for gaming and
                    at one point dreamed of creating my own game. Once I hit college and decided that I was interested in business, I began to realize
                    how so many inefficiencies and obstacles from an operations standpoint could be made non-issues utilizing software. It was
                    then that I decided that I wanted to pursue a career in technology.
                </p>
                <p>
                    In 2018, I started a company called Grand Master Tech Inc. with 4 others with the purpose of developing marketing applications
                    for the appointment based and food service business model industries. We were nearing being ready for launch when the COVID-19
                    pandemic began in the states. We pivoted to creating a web-based menu, but unfortunately had to close down due to our limited resources.
                    We simply couldnt produce the output at speeds necessary.
                </p>
                <p>
                    After we shut down in early 2020, I was even more determined to pursue development as a career. I found the Thinkful
                    Engineering Immersion program and decided to attempt a coding bootcamp to become a Full Stack Developer. 5 months later, I graduated
                    with an even greater drive to learn, create, and provide solutions for eliminating obstacles to make goals more reachable!
                </p>
                </div>
            </div>
        </article>
    </StyledAbout>

    );
}

const StyledAbout = styled.section`
/* margin: 4rem 5rem; */

.about {
    margin: 4rem 1rem;
    box-shadow: 1px 5px 10px #918e8d82; 

    h2 {
        font-size: xx-large;
        margin-left: 2rem;
        padding-top: 1rem;
    }
    .aboutDesc {
        padding: 0 3rem 1rem 3rem;

        .text {
            p {
                font-size: medium;
                
            }
        }
    }
}
`;

export default About;