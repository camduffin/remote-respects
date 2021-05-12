import React from 'react';
import { Parallax } from 'react-parallax';
import landing from '../images/landing.jpg';
import '../../styles/index.scss';
import { CgArrowLongDownC } from 'react-icons/cg';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Landing = () => {
    return (
        <Parallax 
        className="landing-background"
        strength={400}
        blur={{ min: -4, max: 4 }} 
        bgImage={landing}>
            <div className="landing-container" id="main">
                <h1 data-sal="slide-right" data-sal-duration="1000">Remote Respects</h1>
                <CgArrowLongDownC onClick={() => scrollTo('#about')} />
            </div>
        </Parallax>
    )
}

export default Landing;