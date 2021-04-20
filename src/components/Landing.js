import React from 'react';
import { Parallax } from 'react-parallax';
import darkLandscape from '../images/dark-landscape.jpg';
import '../../styles/index.scss';

const Landing = () => {
    return (
        <Parallax 
        className="landing-background"
        strength={500}
        blur={{ min: -15, max: 15 }} 
        bgImage={darkLandscape}>
            <h1>Remote Respects</h1>
        </Parallax>
    )
}

export default Landing;