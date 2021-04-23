import React, { useState, useEffect } from 'react';
import '../../../styles/index.scss';
import { Link } from 'gatsby';


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
                    <Link to="/#examples">
                        Examples
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
        </nav>
    )
}

export default BlogNav;