import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import Tire_img1 from '../../../Components/Assets/tire-img3.jpg';
import Tire_img2 from '../../../Components/Assets/tire-img2.jpg';
import Tire_img3 from '../../../Components/Assets/tire-img1.jpg';
import Tire_img4 from '../../../Components/Assets/tire-img4.jpg';
import Tire_img5 from '../../../Components/Assets/tire-img5.jpg';
import Tire_img7 from '../../../Components/Assets/tire-img6.jpg';
import './Markets.css'; // Import CSS for animations and styling

const Markets = () => {
  return (
    <div className="markets-page">
      <Navbar />
      <header className="markets-header animate-slide-down">
        <h1 className="markets-title">Global Markets We Serve</h1>
        <p className="markets-subtitle">
          Revolutionizing mobility with advanced run-flat tire systems for military and commercial vehicles.
        </p>
      </header>
      <section className="markets-gallery">
        <div className="gallery-row">
          <div className="gallery-item animate-fade-in">
            <img src={Tire_img1} alt="Market 1" className="gallery-image" />
            <h3 className="gallery-title">Military Vehicles</h3>
            <p className="gallery-description">Reliable under the most challenging conditions.</p>
          </div>
          <div className="gallery-item animate-fade-in">
            <img src={Tire_img2} alt="Market 2" className="gallery-image" />
            <h3 className="gallery-title">Emergency Response</h3>
            <p className="gallery-description">Safety and performance in critical situations.</p>
          </div>
          <div className="gallery-item animate-fade-in">
            <img src={Tire_img3} alt="Market 3" className="gallery-image" />
            <h3 className="gallery-title">Commercial Transport</h3>
            <p className="gallery-description">Efficiency and reliability for heavy-duty operations.</p>
          </div>
        </div>
        <div className="gallery-row">
          <div className="gallery-item animate-fade-in">
            <img src={Tire_img4} alt="Market 4" className="gallery-image" />
            <h3 className="gallery-title">Luxury Vehicles</h3>
            <p className="gallery-description">Premium solutions for premium vehicles.</p>
          </div>
          <div className="gallery-item animate-fade-in">
            <img src={Tire_img5} alt="Market 5" className="gallery-image" />
            <h3 className="gallery-title">Agriculture</h3>
            <p className="gallery-description">Durability and performance in all terrains.</p>
          </div>
          <div className="gallery-item animate-fade-in">
            <img src={Tire_img7} alt="Market 6" className="gallery-image" />
            <h3 className="gallery-title">Mining</h3>
            <p className="gallery-description">Built for the toughest environments.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Markets;
