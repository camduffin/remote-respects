import React from 'react';
import { Parallax } from 'react-parallax';
import fields from '../images/fields.jpg';
import { BiChevronsDown } from 'react-icons/bi';
import '../../styles/index.scss';
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from 'gatsby-plugin-smoothscroll';

const How = () => {

    const mobileVideo = '../images/mobile-video.jpg';

    return (
        <>
            <section className="how-section" id="how" data-sal="fade" data-sal-duration="1000">
                <Parallax 
                className="how-background"
                strength={500}
                blur={{ min: -15, max: 15 }} 
                bgImage={fields}
                >
                    <div className="wrapper">
                        <div className="how-text">
                            <h2>How it Works</h2>
                            <p>As long as there is an internet connection (we can help as needed) RemoteRespects manages your memorial webcast from just about anywhere. Graveside, funeral home, however you've chosen to honour your loved one, our staff are mindful and supportive.</p>
                            <div className="learn-more" onClick={() => scrollTo('#examples')}>
                                <BiChevronsDown />
                                    <p>Learn more</p>
                                <BiChevronsDown />
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>
            <section className="how-section-two" id="examples" data-sal="fade" data-sal-duration="1000">
                <div className="wrapper how-two-flex">
                    <div className="how-two-image">
                        <StaticImage className="mobile-video" src={mobileVideo} alt="A phone with a video playing" />
                    </div>
                    <div className="how-two-text">
                        <h2>Examples</h2>
                        <p>We create a page with your service embedded, and provide a link to share with friends and family. It will look something like THIS REMOTERESPECTS.CA/JOHNSMITH and can include items such as a guestbook, prayers, or song lyrics.</p>
                        <p>We manage site visits, microphone and camera setups, coordination with your funeral director and provide a high quality broadcast for your loved ones to visit at their comfort. Our professional staff are polite, well dressed, and adhere to all mask and distancing requirements. The price for a basic service (three hour minimum, videographer, set up and tear down) is $1,750 giving you less to worry about at this time.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default How;