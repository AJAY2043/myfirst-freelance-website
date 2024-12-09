import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTruckMonster, faBolt, faRoad, faCogs, faCircle } from '@fortawesome/free-solid-svg-icons';
import './Strengths.css'; // Custom CSS for animations and styling

const Strengths = () => {
  return (
    <div className="strengths-page">
      <Navbar />
      
      <header className="strengths-header animate-fade-in">
        <h1 className="strengths-title">Our Strengths</h1>
        <p className="strengths-subtitle">Engineering Excellence for the Toughest Terrains</p>
      </header>
      
      <section className="strengths-content">
        <div className="strengths-card animate-zoom-in">
          <FontAwesomeIcon icon={faShieldAlt} className="strengths-icon" />
          <h2>Durability</h2>
          <p>Our tires are built to withstand extreme conditions, ensuring reliability in any terrain.</p>
        </div>
        <div className="strengths-card animate-zoom-in">
          <FontAwesomeIcon icon={faTruckMonster} className="strengths-icon" />
          <h2>Heavy-Duty Performance</h2>
          <p>Designed for military and specialized vehicles, our tires deliver unmatched strength.</p>
        </div>
        <div className="strengths-card animate-zoom-in">
          <FontAwesomeIcon icon={faBolt} className="strengths-icon" />
          <h2>Innovation</h2>
          <p>We leverage cutting-edge technology to create advanced run-flat systems.</p>
        </div>
        <div className="strengths-card animate-zoom-in">
          <FontAwesomeIcon icon={faRoad} className="strengths-icon" />
          <h2>Adaptability</h2>
          <p>Versatile designs that perform efficiently across diverse terrains and climates.</p>
        </div>
        <div className="strengths-card animate-zoom-in">
          <FontAwesomeIcon icon={faCogs} className="strengths-icon" />
          <h2>Precision Engineering</h2>
          <p>Every tire is crafted with meticulous attention to detail and quality standards.</p>
        </div>
        <div className="strengths-card animate-zoom-in">
          <FontAwesomeIcon icon={faCircle} className="strengths-icon" />
          <h2>Eco-Friendly</h2>
          <p>Our manufacturing processes are optimized for sustainability and minimal waste.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Strengths;
