import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCog, faCheckCircle, faBolt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import './MilitaryRunFlatSystems.css'; // Ensure this CSS file includes styles for animations and responsiveness

const MilitaryRunFlatSystems = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Add delay for smooth loading animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`military-container ${isLoaded ? 'loaded' : ''}`}>
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Military Runflat Systems</h1>
        <p className="hero-subtitle">
          Built for the toughest missions, ensuring safety and performance under any conditions.
        </p>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card animate-zoom-in">
            <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
            <h3>Durability</h3>
            <p>Withstand extreme conditions and impacts during missions.</p>
          </div>
          <div className="feature-card animate-zoom-in">
            <FontAwesomeIcon icon={faCog} className="feature-icon" />
            <h3>Precision Engineering</h3>
            <p>Designed with cutting-edge technology for unmatched reliability.</p>
          </div>
          <div className="feature-card animate-zoom-in">
            <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
            <h3>Safety Assured</h3>
            <p>Maintains control and performance even after tire damage.</p>
          </div>
          <div className="feature-card animate-zoom-in">
            <FontAwesomeIcon icon={faBolt} className="feature-icon" />
            <h3>High Performance</h3>
            <p>Optimized for speed and efficiency in demanding terrains.</p>
          </div>
          <div className="feature-card animate-zoom-in">
            <FontAwesomeIcon icon={faWeightHanging} className="feature-icon" />
            <h3>Load Capacity</h3>
            <p>Capable of handling heavy military equipment effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Our Military Runflat Systems?</h2>
        <p className="section-description">
          We combine innovation, expertise, and a commitment to excellence to deliver products that meet the unique needs of military applications.
        </p>
        <ul className="benefits-list">
          <li>Proven track record in the defense sector.</li>
          <li>Customizable solutions for diverse requirements.</li>
          <li>Backed by industry-leading warranties and support.</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default MilitaryRunFlatSystems;
