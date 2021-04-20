import React from 'react';
import '../../styles/index.scss';
import { SiTwitter } from 'react-icons/si';
import { RiFacebookFill } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { AiFillLinkedin } from 'react-icons/ai';

const SocialLinks = () => {
    return (
        <nav>
            <ul className="social-links">
                <li>
                    <a href="https://www.linkedin.com/company/isilive/?originalSubdomain=ca" target="_blank" rel="noreferrer noopener"><p className="sr-only">iSiLIVE Website</p><AiFillLinkedin aria-hidden="true" aria-label="LinkedIn Icon"/></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/isilivecanada/" target="_blank" rel="noreferrer noopener"><p className="sr-only">iSiLIVE Facebook</p><RiFacebookFill aria-hidden="true" aria-label="Facebook Icon"/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/isilivecanada/?hl=en" target="_blank" rel="noreferrer noopener"><p className="sr-only">iSiLIVE Instagram</p><GrInstagram aria-hidden="true" aria-label="Instagram Icon"/></a>
                </li>
                <li>
                    <a href="https://twitter.com/isilive_canada?lang=en" target="_blank" rel="noreferrer noopener"><p className="sr-only">iSiLIVE Twitter</p><SiTwitter aria-hidden="true" aria-label="Twitter Icon"/></a>
                </li>
            </ul>
        </nav>
    )
}

export default SocialLinks;