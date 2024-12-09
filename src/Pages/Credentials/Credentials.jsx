import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCertificate, faCheckCircle, faShieldAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './Credentials.css'; // Import custom CSS for styling

const Credentials = () => {
  return (
    <div className="credentials-page">
      <Navbar />

      <header className="credentials-header animate-slide-down">
        <h1 className="credentials-title">Our Credentials</h1>
        <p className="credentials-subtitle">
          Trusted by leading organizations worldwide for our superior quality and innovation.
        </p>
      </header>

      <section className="credentials-section">
        <div className="credentials-card animate-zoom-in">
          <FontAwesomeIcon icon={faAward} className="icon-award" />
          <h3>Awards & Recognitions</h3>
          <p>
            Proud recipients of industry-leading awards that celebrate our commitment to excellence.
          </p>
        </div>

        <div className="credentials-card animate-zoom-in">
          <FontAwesomeIcon icon={faCertificate} className="icon-certificate" />
          <h3>Certifications</h3>
          <p>
            Certified to meet the most stringent international quality and safety standards.
          </p>
        </div>

        <div className="credentials-card animate-zoom-in">
          <FontAwesomeIcon icon={faCheckCircle} className="icon-check-circle" />
          <h3>Proven Reliability</h3>
          <p>
            Delivering unmatched performance under the toughest conditions globally.
          </p>
        </div>

        <div className="credentials-card animate-zoom-in">
          <FontAwesomeIcon icon={faShieldAlt} className="icon-shield-alt" />
          <h3>Trusted by the Military</h3>
          <p>
            Partnering with defense forces worldwide to enhance their operational capabilities.
          </p>
        </div>

        <div className="credentials-card animate-zoom-in">
          <FontAwesomeIcon icon={faHandshake} className="icon-handshake" />
          <h3>Strong Partnerships</h3>
          <p>
            Collaborating with global leaders to pioneer innovations in tire technology.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Credentials;
