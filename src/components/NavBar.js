import React, { useState, useEffect } from 'react';
import '../../styles/index.scss';


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

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {      

        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {   
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, [prevScrollPos, visible, handleScroll]);


    return (
        <nav className="nav-bar" id="navbar" style={{top: visible ? '0' : '-15vh'}}>
            <ul>
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
            </ul>
        </nav>
    )
}

export default NavBar;