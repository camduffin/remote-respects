import React from 'react';
import logo from '../images/isi-logo.png';
import SocialLinks from '../components/SocialLinks';
import logoWeb from '../images/isi-logo-2.webp';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container" data-sal="fade" data-sal-duration="2000">
                <div className="footer-flex-one">
                    <div className="address">
                        <p>150 C Terence</p>
                        <p>Matthews Cres</p>
                        <p>Ottawa, ON K2M1X4</p>
                    </div>
                    <div className="copyright">
                        <p>Presented By</p>
                        <a href="https://isilive.ca/" target="_blank" rel="noreferrer noopener">
                            <img className="isi-logo" src={logoWeb} alt="iSiLIVE logo"/>
                        </a>
                    </div>
                </div>
                <div className="footer-flex-two">
                    <div className="phone">
                        <a href="tel:613.737.3378">Tel: 613.737.3378</a>
                        <a href="mailto:info@ourday.ca">info@ourday.ca</a>
                    </div>
                    <nav>
                        <SocialLinks />
                    </nav>
                </div>
            </div>
            <div className="copyright-bottom">
                <p>© 2021 RemoteRespects.ca</p>
            </div>
        </footer>
    )
}

export default Footer;