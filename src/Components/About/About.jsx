import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { FaShieldAlt, FaCar, FaCogs, FaThumbsUp, FaUsers } from 'react-icons/fa';
import vivek_sign from '../Assets/vivek-sign.jpg'; // Your signature image or another image

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about-section" ref={aboutRef} style={{ background: 'skyblue', padding: '50px 0' }}>
      {/* Header Section */}
      <div className={`header ${isVisible ? 'fade-in' : ''}`}>
        <h1>About Us</h1>
        <p>We are passionate about providing durable, reliable, and innovative tire solutions for military vehicles and beyond.</p>
      </div>

      {/* Main Content Section */}
      <div className={`about-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="about-card">
          <FaShieldAlt size={50} color="#007bff" />
          <h3>Quality & Durability</h3>
          <p>Our run-flat systems are engineered to endure the most extreme conditions, ensuring reliability in critical situations.</p>
        </div>
        <div className="about-card">
          <FaCar size={50} color="#007bff" />
          <h3>Military Excellence</h3>
          <p>We specialize in designing tires specifically for military vehicles, providing unmatched performance and safety.</p>
        </div>
        <div className="about-card">
          <FaCogs size={50} color="#007bff" />
          <h3>Advanced Technology</h3>
          <p>Our technology leverages the latest advancements to create the most robust and high-performance tires in the market.</p>
        </div>
      </div>

      {/* Signature Section */}
      <div className={`signature ${isVisible ? 'fade-in' : ''}`}>
        <img src={vivek_sign} alt="Vivek Signature" />
        <p>Vivek Japala, Manager</p>
      </div>
    </div>
  );
};

export default About;
