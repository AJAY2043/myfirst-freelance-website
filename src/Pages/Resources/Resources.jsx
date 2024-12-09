import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFileAlt, faLaptopCode, faChartBar, faTools } from '@fortawesome/free-solid-svg-icons';
import './Resources.css'; // Import custom CSS for animations and styling

const Resources = () => {
  return (
    <div className="resources-page">
      <Navbar />

      <header className="resources-header animate-slide-down">
        <h1 className="resources-title">Our Resources</h1>
        <p className="resources-subtitle">
          Explore a wealth of knowledge and tools designed to support innovation and performance.
        </p>
      </header>

      <section className="resources-grid">
        <div className="resource-card animate-zoom-in">
          <FontAwesomeIcon icon={faBook} className="resource-icon" />
          <h2>Technical Manuals</h2>
          <p>Comprehensive guides and technical documentation for our cutting-edge products.</p>
        </div>

        <div className="resource-card animate-zoom-in">
          <FontAwesomeIcon icon={faFileAlt} className="resource-icon" />
          <h2>Case Studies</h2>
          <p>Success stories showcasing how our solutions deliver in real-world applications.</p>
        </div>

        <div className="resource-card animate-zoom-in">
          <FontAwesomeIcon icon={faLaptopCode} className="resource-icon" />
          <h2>Developer Tools</h2>
          <p>APIs and SDKs to integrate our technology into your ecosystem seamlessly.</p>
        </div>

        <div className="resource-card animate-zoom-in">
          <FontAwesomeIcon icon={faChartBar} className="resource-icon" />
          <h2>Performance Reports</h2>
          <p>Detailed performance metrics and analysis for informed decision-making.</p>
        </div>

        <div className="resource-card animate-zoom-in">
          <FontAwesomeIcon icon={faTools} className="resource-icon" />
          <h2>Support Tools</h2>
          <p>Diagnostic and troubleshooting resources to keep you operational.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
