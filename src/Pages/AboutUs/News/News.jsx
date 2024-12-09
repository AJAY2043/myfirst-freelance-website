import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMonster, faShieldAlt, faGlobe, faBolt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import './News.css'; // Import CSS for animations and styling

const News = () => {
  return (
    <div className="news-page">
      <Navbar />
      <header className="news-header">
        <div className="header-content animate-slide-down">
          <h1 className="header-title">Latest News</h1>
          <p className="header-subtitle">Stay updated with the cutting-edge innovations in run-flat tire systems.</p>
        </div>
      </header>
      <main className="news-main">
        <section className="news-grid">
          <div className="news-card animate-slide-left">
            <FontAwesomeIcon icon={faTruckMonster} className="news-icon" />
            <h3>Military Innovations</h3>
            <p>
              Explore how our advanced tire systems enhance the performance and reliability of military vehicles.
            </p>
          </div>
          <div className="news-card animate-slide-right">
            <FontAwesomeIcon icon={faShieldAlt} className="news-icon" />
            <h3>Enhanced Durability</h3>
            <p>
              Learn about the latest breakthroughs in durability and safety for extreme conditions.
            </p>
          </div>
          <div className="news-card animate-slide-up">
            <FontAwesomeIcon icon={faGlobe} className="news-icon" />
            <h3>Global Reach</h3>
            <p>
              Discover our growing presence in international markets and new collaborations.
            </p>
          </div>
          <div className="news-card animate-slide-down">
            <FontAwesomeIcon icon={faBolt} className="news-icon" />
            <h3>Next-Gen Performance</h3>
            <p>
              Introducing next-generation run-flat tires that redefine efficiency and resilience.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
