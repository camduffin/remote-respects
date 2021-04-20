import React from 'react';
import { Parallax } from 'react-parallax';
import trees from '../images/trees.jpg';
import { FaPhone }  from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <Parallax 
                className="contact-background"
                strength={500}
                blur={{ min: -15, max: 15 }} 
                bgImage={trees}
                >
                    <div className="wrapper">
                        <div className="contact-text">
                            <div className="form-container">
                                <h3>Contact us today:</h3>
                                <ContactForm />
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="tel:+1-613-737-3378"><FaPhone aria-hidden="true"/> 613-737-3378</a></li>
                                    <li><a href="mailto:info@ourday.ca"><MdEmail aria-hidden="true"/> info@ourday.ca</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            </Parallax>
        </section>
    )
}

export default Contact;