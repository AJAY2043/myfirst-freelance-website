import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import Wheel_img1 from '../../../Components/Assets/wheel-img1.jpg';
import Wheel_img2 from '../../../Components/Assets/wheel-img2.jpg';
import Wheel_img3 from '../../../Components/Assets/wheel-img3.jpg';
import Wheel_img4 from '../../../Components/Assets/wheel-img4.jpg';
import Wheel_img5 from '../../../Components/Assets/wheel-img5.jpg';
import Wheel_img6 from '../../../Components/Assets/wheel-img6.jpg';
import Wheel_img7 from '../../../Components/Assets/wheel-img7.jpg';
import Wheel_img8 from '../../../Components/Assets/wheel-img8.jpg';
import Wheel_img9 from '../../../Components/Assets/wheel-img9.jpg';
import Wheel_img10 from '../../../Components/Assets/wheel-img10.jpg';
import Wheel_img11 from '../../../Components/Assets/wheel-img11.jpg';
import Wheel_img12 from '../../../Components/Assets/wheel-img12.jpg';
import Wheel_img13 from '../../../Components/Assets/wheel-img13.jpg';
import Wheel_img14 from '../../../Components/Assets/wheel-img14.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMonster, faShieldAlt, faRoad, faIndustry, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Material.css'; // Import CSS for animations and styling

const Materials = () => {
  const images = [
    Wheel_img1,
    Wheel_img2,
    Wheel_img3,
    Wheel_img4,
    Wheel_img5,
    Wheel_img6,
    Wheel_img7,
    Wheel_img8,
    Wheel_img9,
    Wheel_img10,
    Wheel_img11,
    Wheel_img12,
    Wheel_img13,
    Wheel_img14,
  ];

  return (
    <div className="markets-page">
      <Navbar />
      <header className="markets-header animate-slide-down">
        <h1 className="markets-title">Global Markets</h1>
        <p className="markets-subtitle">
          Discover how our run-flat tire solutions revolutionize industries worldwide.
        </p>
        <div className="header-icons">
          <FontAwesomeIcon icon={faTruckMonster} className="icon-bounce" />
          <FontAwesomeIcon icon={faShieldAlt} className="icon-spin" />
          <FontAwesomeIcon icon={faRoad} className="icon-bounce" />
          <FontAwesomeIcon icon={faIndustry} className="icon-spin" />
          <FontAwesomeIcon icon={faGlobe} className="icon-bounce" />
        </div>
      </header>

      <main className="markets-content">
        <section className="markets-intro">
          <h2 className="animate-zoom">Innovating Across Industries</h2>
          <p>
            From military to industrial applications, our advanced run-flat tire systems ensure
            reliability and performance under the toughest conditions.
          </p>
        </section>

        <section className="markets-gallery">
          <h2 className="animate-zoom">Gallery of Excellence</h2>
          <div className="image-grid">
            {images.map((img, index) => (
              <div key={index} className="image-container animate-zoom">
                <img src={img} alt={`Market Showcase ${index + 1}`} className="responsive-img" />
              </div>
            ))}
          </div>
        </section>

        <section className="markets-benefits">
          <h2 className="animate-fade">Why Choose Us?</h2>
          <ul className="benefits-list">
            <li className="animate-slide">
              <FontAwesomeIcon icon={faShieldAlt} /> Unmatched durability for all terrains.
            </li>
            <li className="animate-slide">
              <FontAwesomeIcon icon={faTruckMonster} /> Tailored solutions for military vehicles.
            </li>
            <li className="animate-slide">
              <FontAwesomeIcon icon={faIndustry} /> Proven track record in industrial safety.
            </li>
            <li className="animate-slide">
              <FontAwesomeIcon icon={faGlobe} /> Trusted by industries worldwide.
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Materials
