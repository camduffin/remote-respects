import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import '../../styles/index.scss';

const About = () => {

    const candles = '../images/candles.jpg';

    return (
        <section className="about-section" id="about">
            <div className="wrapper about-container">
                <div className="about-text">
                <h2>About</h2>
                <p>Right now there's people who share your grief but cannot share your space. It is an unfortunate reality.</p>
                <p>We can help you bring and share your memories and memorial with the people that matter.</p>
                </div>
                <div className="about-image">
                <StaticImage 
                className="candle-image" 
                src={candles} alt="candles"
                placeholder="blurred" 
                
                loading="lazy"
                width={700}
                height={400}
                />
                </div>
            </div>
        </section>
    )
}
export default About;