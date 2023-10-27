import React, { useEffect } from "react";
import "./aboutstyles.css";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import Header from "../Header/Header";
const About = () => {
    useEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        tl.to('.aboutHero', {
            scale: 0.9,
            borderRadius: '40px',
            duration: 1,
            delay: 1,

        })

        tl.to('.aboutHero', {
            y: '-100%',

        })
        tl.from('.aboutUs', {
            opacity: 0,
            duration: 1,
        })


    }, [])
    return <div className="aboutSection">
        <Header/>
        <div className="aboutHero">
            <h1>About</h1>
            {/* <img src="https://media.tenor.com/images/9f87cb0ae4929104b4050a05e1badd61/tenor.gif" alt="" /> */}
        </div>
        <div className="aboutUs">
            <div className="text">
                <h2>Our Story</h2>
                <p>Lorem ipsum Lo
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minus quo magnam dolore, hic corporis id veniam assumenda eum quas? Amet nulla eius quaerat, inventore, optio reiciendis itaque temporibus dicta molestias rerum voluptatibus. Commodi, delectus optio. Maiores provident, eos excepturi itaque autem molestiae voluptas deleniti eligendi eveniet harum repellat voluptates fugit adipisci quidem tempora quod tenetur illo eaque ullam cumque corporis nam quia eius. Doloribus impedit, odio totam explicabo in vitae, voluptatibus nulla, asperiores nostrum eaque obcaecati? Illo nobis ad vitae id inventore magni nam suscipit animi provident quis, accusantium cupiditate temporibus, alias, cum impedit nihil dolore quibusdam? Iusto, molestiae?
                    rem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa, blanditiis architecto delectus iure consectetur molestias, corporis nesciunt debitis minima sit consequatur consequuntur. Tempora tenetur, voluptatem molestiae architecto enim quas facere voluptatum qui quis quos quisquam magni iure nulla, commodi nisi incidunt accusamus praesentium sint magnam. Optio alias sint quaerat saepe vitae necessitatibus nostrum itaque quos, aliquid molestias accusamus nihil! Soluta voluptas sit temporibus enim esse numquam dolores minima ipsa optio est? Rem, veritatis error, dolor placeat cumque deserunt blanditiis nesciunt dolores, impedit tempore architecto? Totam incidunt expedita aperiam quisquam maiores rem facere unde iure impedit eaque quis, molestias et! dolor sit, amet consectetur adipisicing elit. Repellat explicabo molestiae libero, aut suscipit magni repudiandae vel eveniet! Eum cum, facere dolorum non reprehenderit optio tenetur porro sequi molestias sint!</p>
            </div>
            <div className="ourteam">
                <h1>Out Team</h1>
                <div className="teamCardsContainer">
                    <div className="teamCard">
                        <div className="teamCardInner">
                            <img src="https://th.bing.com/th/id/R.c3e7fea834548c6b7d7bf4ae3d371f72?rik=FCcvEoGVBD14BQ&riu=http%3a%2f%2fwww.logidriveindia.com%2fwp-content%2fuploads%2f2020%2f06%2f130-1300253_female-user-icon-png-download-user-image-color.png&ehk=xVmpqWHHZJuNw5ERCVVv3%2bJ0PP6woCZmNd1tme3ZZQc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <div className="cardinfo">
                                <h2>Sandeep Singh</h2>
                                <p>Web Developer</p>
                                <p>2nd Year</p>
                            </div>
                        </div>
                        <span>Lorem oluptatum reprehenderit ut eum hic! Quisquam dignissimos blanditiis cumque quasi quae recusandae error dolorem quod itaque ad vitae nihil animi incidunt nesciunt ipsa, veniam vero, distincti lor sit amet consectetur adipisicing elit. Minus consequuntur distinctio voluptatem nam odit molestias inventore cupiditate esse aspernatur doloremque!</span>
                    </div>
                    <div className="teamCard">
                        <div className="teamCardInner">
                            <img src="https://th.bing.com/th/id/R.c3e7fea834548c6b7d7bf4ae3d371f72?rik=FCcvEoGVBD14BQ&riu=http%3a%2f%2fwww.logidriveindia.com%2fwp-content%2fuploads%2f2020%2f06%2f130-1300253_female-user-icon-png-download-user-image-color.png&ehk=xVmpqWHHZJuNw5ERCVVv3%2bJ0PP6woCZmNd1tme3ZZQc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <div className="cardinfo">
                                <h2>Sandeep Singh</h2>
                                <p>Web Developer</p>
                                <p>2nd Year</p>
                            </div>
                        </div>
                        <span>Lorem oluptatum reprehenderit ut eum hic! Quisquam dignissimos blanditiis cumque quasi quae recusandae error dolorem quod itaque ad vitae nihil animi incidunt nesciunt ipsa, veniam vero, distincti lor sit amet consectetur adipisicing elit. Minus consequuntur distinctio voluptatem nam odit molestias inventore cupiditate esse aspernatur doloremque!</span>
                    </div>
                    <div className="teamCard">
                        <div className="teamCardInner">
                            <img src="https://th.bing.com/th/id/R.c3e7fea834548c6b7d7bf4ae3d371f72?rik=FCcvEoGVBD14BQ&riu=http%3a%2f%2fwww.logidriveindia.com%2fwp-content%2fuploads%2f2020%2f06%2f130-1300253_female-user-icon-png-download-user-image-color.png&ehk=xVmpqWHHZJuNw5ERCVVv3%2bJ0PP6woCZmNd1tme3ZZQc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <div className="cardinfo">
                                <h2>Sandeep Singh</h2>
                                <p>Web Developer</p>
                                <p>2nd Year</p>
                            </div>
                        </div>
                        <span>Lorem oluptatum reprehenderit ut eum hic! Quisquam dignissimos blanditiis cumque quasi quae recusandae error dolorem quod itaque ad vitae nihil animi incidunt nesciunt ipsa, veniam vero, distincti lor sit amet consectetur adipisicing elit. Minus consequuntur distinctio voluptatem nam odit molestias inventore cupiditate esse aspernatur doloremque!</span>
                    </div>
                    <div className="teamCard">
                        <div className="teamCardInner">
                            <img src="https://th.bing.com/th/id/R.c3e7fea834548c6b7d7bf4ae3d371f72?rik=FCcvEoGVBD14BQ&riu=http%3a%2f%2fwww.logidriveindia.com%2fwp-content%2fuploads%2f2020%2f06%2f130-1300253_female-user-icon-png-download-user-image-color.png&ehk=xVmpqWHHZJuNw5ERCVVv3%2bJ0PP6woCZmNd1tme3ZZQc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <div className="cardinfo">
                                <h2>Sandeep Singh</h2>
                                <p>Web Developer</p>
                                <p>2nd Year</p>
                            </div>
                        </div>
                        <span>Lorem oluptatum reprehenderit ut eum hic! Quisquam dignissimos blanditiis cumque quasi quae recusandae error dolorem quod itaque ad vitae nihil animi incidunt nesciunt ipsa, veniam vero, distincti lor sit amet consectetur adipisicing elit. Minus consequuntur distinctio voluptatem nam odit molestias inventore cupiditate esse aspernatur doloremque!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default About;
