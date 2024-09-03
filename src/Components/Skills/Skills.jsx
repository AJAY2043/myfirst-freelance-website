import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="skills-title">Technical Skills</h2>
                <div className="skills-content">
                    <div className="skill">
                        <h4>Core Java</h4>
                        <div className="skill-bar">
                            <div className="skill-level" style={{width: '85%'}}>85%</div>
                        </div>
                    </div>
                    <div className="skill">
                        <h4>HTML</h4>
                        <div className="skill-bar">
                            <div className="skill-level" style={{width: '90%'}}>90%</div>
                        </div>
                    </div>
                    <div className="skill">
                        <h4>CSS</h4>
                        <div className="skill-bar">
                            <div className="skill-level" style={{width: '80%'}}>80%</div>
                        </div>
                    </div>
                    <div className="skill">
                        <h4>JavaScript</h4>
                        <div className="skill-bar">
                            <div className="skill-level" style={{width: '75%'}}>75%</div>
                        </div>
                    </div>
                    <div className="skill">
                        <h4>MySQL</h4>
                        <div className="skill-bar">
                            <div className="skill-level" style={{width: '70%'}}>70%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
