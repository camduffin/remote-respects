import React from 'react';
import whiteFlowers from '../../images/white-flowers.jpg';

const PostOne = () => {

    return (
        <section className="blog-section-one" id="blog">
            <div className="wrapper blog-flex-one">
                <div className="blog-text-container-one">
                    <h3>Recent Articles</h3>
                    <ul>
                        <li>
                            <a href="https://www.wired.com/story/zoom-funeral-etiquette-manners/" target="_blank" rel="noreferrer noopener">How to Pay Your Respects During a Virtual Funeral</a>
                            <p>Wired.com</p>
                        </li>
                        <li>
                            <a href="https://globalnews.ca/news/7609806/pandemic-grief-funeral-homes/" target="_blank" rel="noreferrer noopener">‘Unsupported grief is a real reality’: Funeral homes adapt to ongoing pandemic</a>
                            <p>Global News</p>
                        </li>
                        <li>
                            <a href="https://www.nytimes.com/2021/01/14/well/family/virtual-funeral-advice.html" target="_blank" rel="noreferrer noopener">Virtual Funeral Advice</a>
                            <p>New York Times</p>
                        </li>
                    </ul>
                </div>
                <div className="blog-image-container-one">
                    <img src={whiteFlowers} alt="White tulips blooming"/>
                </div>
            </div>
        </section>
    )
}

export default PostOne;