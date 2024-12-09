import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCogs, faDollarSign, faCheckCircle, faToolbox } from '@fortawesome/free-solid-svg-icons';
import './RunFlatSystems.css'; // Include this CSS file for animations and styles

const RunFlatSystems = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Simulate loading delay for better UX
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`runflat-container ${isLoaded ? 'loaded' : 'loading'}`}>
      <Navbar />
      
      <div className="runflat-content">
        <h1 className="runflat-title animate-slide-in">Run-Flat Tire Systems</h1>
        <p className="runflat-subtitle animate-fade-in">
          Revolutionizing mobility for military and industrial vehicles.
        </p>

        <div className="runflat-features">
          <div className="feature animate-zoom-in">
            <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
            <h3>Durability</h3>
            <p>Engineered to withstand the harshest conditions.</p>
          </div>
          <div className="feature animate-zoom-in delay-1">
            <FontAwesomeIcon icon={faCogs} className="feature-icon" />
            <h3>Advanced Technology</h3>
            <p>Innovative designs ensure maximum performance.</p>
          </div>
          <div className="feature animate-zoom-in delay-2">
            <FontAwesomeIcon icon={faDollarSign} className="feature-icon" />
            <h3>Cost Efficiency</h3>
            <p>Minimized downtime and maintenance costs.</p>
          </div>
          <div className="feature animate-zoom-in delay-3">
            <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
            <h3>Reliability</h3>
            <p>Proven performance in critical missions.</p>
          </div>
          <div className="feature animate-zoom-in delay-4">
            <FontAwesomeIcon icon={faToolbox} className="feature-icon" />
            <h3>Custom Solutions</h3>
            <p>Tailored designs for diverse vehicle requirements.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RunFlatSystems;
