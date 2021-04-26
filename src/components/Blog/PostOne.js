import React from 'react';
import whiteFlowers from '../../images/white-flowers.jpg';
import petals from '../../images/petals.jpg';

const PostOne = () => {


    return (
        <section className="blog-section-one" id="blog">
            <div className="wrapper blog-flex-one">
                <div className="blog-text-container-one">
                    <h3>Livestreaming a Funeral</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam libero amet nam rerum dolore dolores, tempora non quo doloribus est culpa nisi consequuntur, repellendus laborum. Illo vitae animi ullam minus numquam laudantium incidunt expedita cum dolores asperiores, inventore praesentium soluta quos vero perspiciatis voluptates ducimus illum rerum! Veniam vitae harum asperiores, sapiente mollitia vel vero, nesciunt similique, nostrum magni debitis aliquid! Nostrum rem ipsum minus aperiam reprehenderit, magni ea repudiandae ipsam provident sed corrupti doloremque necessitatibus saepe modi ducimus accusamus! Dolore explicabo dignissimos distinctio aliquam. Architecto vitae enim fugit aspernatur repellendus a, repudiandae laborum explicabo placeat odio, nesciunt quasi.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed numquam iusto ratione commodi corporis. Eius, numquam nam magnam quod itaque ut, rem, consequatur facilis voluptates veritatis obcaecati quia dignissimos perferendis? Odit amet quas dicta magni sunt sed saepe sapiente, mollitia et nemo iusto officiis, rem cumque expedita itaque minus voluptas!</p>
                </div>
                <div className="blog-image-container-one">
                    {/* <StaticImage src={whiteFlowers}
                    className="blog-image-one"
                    alt="White tulip flowers in a garden"
                    width={350}
                    height={550}
                    /> */}
                    <img src={whiteFlowers} alt="White tulips blooming"/>
                </div>
            </div>
            <div className="blog-flex-two wrapper">
                    <div className="blog-image-container-two">
                        <img src={petals} alt="Green petals"/>
                    </div>    
                    <div className="blog-text-container-two">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, temporibus harum dignissimos aut ipsa eveniet labore, numquam, provident itaque animi nostrum! Alias quasi magnam reprehenderit quo eligendi impedit asperiores voluptate.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio consequuntur at eum delectus magni non praesentium totam inventore obcaecati autem recusandae corrupti quidem voluptates quasi reiciendis ipsa molestiae laborum mollitia possimus asperiores, porro sed. Blanditiis laborum sed porro, maxime voluptas in quis, labore pariatur suscipit beatae sequi ad, repudiandae soluta a itaque saepe corrupti numquam quos expedita facilis molestiae officiis alias? Vel, obcaecati omnis, illum nam nulla, tempora quam reiciendis sint ducimus quia pariatur quasi sunt natus minus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, blanditiis?</p>
                    </div>
                </div>
        </section>
    )
}

export default PostOne;