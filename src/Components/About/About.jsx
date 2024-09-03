import React from 'react';
import './About.css';
import maniHeroImg from '../mani assets/mani-heroimg.jpg';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src={maniHeroImg} alt="Manikanta Reddy" className="about-image" />
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h2 className="about-title">About Me</h2>
                            <p className="about-text">
                                Hello! I’m Allatipalli Venkata Manikanta Reddy, a passionate fresher with a strong background in Java and web development.
                                I graduated with a B.Tech in Electronics and Communication Engineering from Tirumala Engineering College in 2022. 
                                I’m dedicated to using my skills to contribute to innovative projects that make a difference.
                            </p>
                            <p className="about-text">
                                My expertise includes Core Java, HTML, CSS, JavaScript, and MySQL. I have completed projects that involve speech emotion recognition using machine learning and a mobile phone detector.
                            </p>
                            <p className="about-text">
                                I’m looking forward to applying my knowledge in a professional setting, where I can grow and help the organization succeed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
