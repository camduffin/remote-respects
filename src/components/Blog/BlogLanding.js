import React from 'react';
import { Parallax } from 'react-parallax';
import ferns from '../../images/ferns.jpg';
import '../../../styles/index.scss';
import { CgArrowLongDownC } from 'react-icons/cg';
import scrollTo from 'gatsby-plugin-smoothscroll';

const BlogLanding = () => {
    return (
        <Parallax 
        className="blog-landing-background"
        strength={500}
        blur={{ min: -15, max: 15 }} 
        bgImage={ferns}>
            <div className="blog-landing-container">
                <h1 data-sal="slide-right" data-sal-duration="2000">Blog</h1>
                <h2 data-sal="slide-left" data-sal-duration="2000">Remote Respects.ca</h2>
            </div>
                <CgArrowLongDownC onClick={() => scrollTo('#blog')} />
        </Parallax>
    )
}

export default BlogLanding;