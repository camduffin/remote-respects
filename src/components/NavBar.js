import React, { useState, useEffect } from 'react';
import '../../styles/index.scss';
import { Link } from 'gatsby';
import { RiCloseFill } from 'react-icons/ri';


const NavBar = () => {

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
            <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                <li className="exit"><RiCloseFill onClick={() => handleClick()} /></li>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#how">How it Works</a>
                </li>
                <li>
                    <a href="#examples">Examples</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
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

export default NavBar;