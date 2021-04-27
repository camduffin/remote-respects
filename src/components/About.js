import React from 'react';
import '../../styles/index.scss';
import candles from '../images/candles.jpg';

const About = () => {


    return (
        <section className="about-section" id="about">
            <div className="wrapper about-container">
                <div className="about-text">
                <h2>About</h2>
                <p>Right now there's people who share your grief but cannot share your space. We can help you bring and share your memories and memorial with the people that matter.</p>
                </div>
                <div className="about-image">
                <img src={candles} alt="A dimly lit white candle"/>
                </div>
            </div>
        </section>
    )
}
export default About;