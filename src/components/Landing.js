import React from 'react';
import { Parallax } from 'react-parallax';
import darkLandscape from '../images/dark-landscape.jpg';
import '../../styles/index.scss';
import { CgArrowLongDownC } from 'react-icons/cg';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Landing = () => {
    return (
        <Parallax 
        className="landing-background"
        strength={500}
        blur={{ min: -15, max: 15 }} 
        bgImage={darkLandscape}>
            <h1 data-sal="slide-right" data-sal-duration="2000">Remote Respects</h1>
            <CgArrowLongDownC onClick={() => scrollTo('#about')} />
        </Parallax>
    )
}

export default Landing;