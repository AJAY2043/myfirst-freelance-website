import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="contact-title">Get in Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                            <h4>Phone</h4>
                            <p>+91 93983 36866</p>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <h4>Email</h4>
                            <p>manikantareddyallatipalli@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                            <h4>Address</h4>
                            <p>Samhita Serenity, Flat 111, Mahadevapura, Bangalore</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" className="form-control" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
