import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import Company_img1 from '../../../Components/Assets/company-img1.jpg';
import Company_img2 from '../../../Components/Assets/company-img2.jpg';
import Company_iso_img from '../../../Components/Assets/iso-img.jpg';
import './Company.css'; // Ensure to create this CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faIndustry, faCogs, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Company = () => {
  return (
    <div className="company-page">
      <Navbar />
      
      {/* Hero Section with Animation */}
      <section className="hero-section animate-top">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Runflat Tire Systems</h1>
          <p className="hero-description">Proud of its 200-year-old heritage, RunFlat International is known for producing top-tier tires. Our company has always embraced innovation and efficiency.</p>
        </div>
      </section>

      {/* About the Company */}
      <section className="about-company animate-bottom">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Runflat Tire Systems has been an industry leader for over two centuries. With a strong focus on sustainability, quality, and innovation, we deliver reliable tire solutions worldwide.</p>
          <div className="icons-container">
            <div className="icon-box">
              <FontAwesomeIcon icon={faAward} className="icon" />
              <p>Award-winning innovation</p>
            </div>
            <div className="icon-box">
              <FontAwesomeIcon icon={faIndustry} className="icon" />
              <p>State-of-the-art manufacturing</p>
            </div>
            <div className="icon-box">
              <FontAwesomeIcon icon={faCogs} className="icon" />
              <p>Advanced technology in tire systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="vision-section" style={{ backgroundColor: '#f1f1f1' }}>
        <div className="vision-text animate-left">
          <h2>Our Vision</h2>
          <p>We aim to revolutionize the tire industry through cutting-edge technology, exceptional craftsmanship, and unwavering dedication to quality.</p>
        </div>
      </section>

      {/* Our Products */}
      <section className="products-section animate-right" style={{ backgroundColor: '#e0f7fa' }}>
        <h2>Our Company</h2>
        <div className="products-container">
          <div className="product">
            <img src={Company_img1} alt="Company Product 1" />
            <p>High-quality, durable tires designed for all weather conditions.</p>
          </div>
          <div className="product">
            <img src={Company_img2} alt="Company Product 2" />
            <p>Efficient, eco-friendly tire solutions for urban mobility.</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section animate-top" style={{ backgroundColor: '#fff3e0' }}>
        <div className="certifications">
          <h2>Our Certifications</h2>
          <div className="certifications-images">
            <img src={Company_iso_img} alt="ISO Certification" />
            <p>ISO 9001 certified for quality management systems.</p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="global-reach-section animate-bottom">
        <h2>Our Global Reach</h2>
        <p>With a presence in over 50 countries, we proudly serve clients across the world, offering innovative tire solutions for all industries.</p>
        <FontAwesomeIcon icon={faGlobe} className="global-icon" />globally
      </section>

      <Footer />
    </div>
  );
};

export default Company;
