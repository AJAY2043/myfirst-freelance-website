// src/Components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Contact Me</h5>
                        <p>Email: manikantareddyallatipalli@gmail.com</p>
                        <p>Phone: +91 9398336866</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <h5>Follow Me</h5>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved. Designed by Your Name</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
