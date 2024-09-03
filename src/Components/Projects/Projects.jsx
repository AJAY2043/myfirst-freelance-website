import React from 'react';
import './Projects.css';
import maniImg1 from '../mani assets/mani-img1.jpg';
import maniImg2 from '../mani assets/mani-img2.jpg';

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="projects-title">My Projects</h2>
                <div className="row">
                    <div className="col-lg-6 col-md-12 project">
                        <img src={maniImg1} alt="Project 1" className="project-image" />
                        <div className="project-content">
                            <h3>Speech Emotion Recognition</h3>
                            <p>
                                A machine learning project that analyzes and recognizes emotions from speech. This project involved 
                                using various ML algorithms to categorize emotions, which is essential in today's digital communication.
                            </p>
                            <p><strong>Technologies Used:</strong> Python, Machine Learning</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 project">
                        <img src={maniImg2} alt="Project 2" className="project-image" />
                        <div className="project-content">
                            <h3>Mobile Phone Detector</h3>
                            <p>
                                A circuit that detects the presence of an active mobile phone within a certain range, useful in 
                                areas where mobile phones are prohibited, like examination halls or meetings.
                            </p>
                            <p><strong>Technologies Used:</strong> Electronics, LM358, Circuit Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
