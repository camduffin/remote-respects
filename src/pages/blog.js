import React from 'react';
import BlogNav from '../components/Blog/BlogNav';
import BlogLanding from '../components/Blog/BlogLanding';
import Footer from '../components/Footer';
import PostOne from '../components/Blog/PostOne';
import SEO from '../components/SEO';

const Blog = () => {

    return (
        <>
            <SEO title="Blog" />
            <header>
                <BlogNav />
                <BlogLanding />
            </header>
            <main>
                <PostOne />
            </main>
            <Footer />
        </>
    )
}

export default Blog;