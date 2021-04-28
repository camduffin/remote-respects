import React, { useState, useEffect } from 'react';
import '../../../styles/index.scss';
import { Link } from 'gatsby';
import { RiCloseFill } from 'react-icons/ri';
import smallLogo from '../../images/isi-small-logo.png';


const BlogNav = () => {

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // States
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [open, setOpen] = useState(false);

    const handleScroll = debounce(() => {      

        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    
        setPrevScrollPos(currentScrollPos);
    }, 100);

    const handleClick = () => {
        setOpen(!open);
    }

    useEffect(() => {   
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, [prevScrollPos, visible, handleScroll]);


    return (
        <nav className="nav-bar" id="navbar" style={{top: visible ? '0' : '-15vh'}}>
            <div className="logo-blog-container">
                <Link className="logo" to="/">
                    <img src={smallLogo} alt="iSiLIVE logo"/>
                </Link>
            </div>
            <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                <li className="exit"><RiCloseFill onClick={() => handleClick()} /></li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/#about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/#how">
                        How it Works
                    </Link>
                </li>
                <li>
                    <Link to="/#pricing">
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link to="/#contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/blog/">
                        Blog
                    </Link>
                </li>
            </ul>
            <div className="burger" onClick={() => handleClick()}>
                <div className="menu" aria-label="hidden"></div>
            </div>
        </nav>
    )
}

export default BlogNav;