import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './OurTeam.css'; // Ensure you have this CSS file for styles
import Carousel from 'react-bootstrap/Carousel';  // Assuming you're using react-bootstrap for carousels
import our_team_img1 from '../../../Components/Assets/team-img1.jpg';
import our_team_img2 from '../../../Components/Assets/team-img2.jpg';
import our_team_img3 from '../../../Components/Assets/team-img3.jpg';
import our_team_img4 from '../../../Components/Assets/team-img4.jpg';
import our_team_img5 from '../../../Components/Assets/team-img5.jpg';
import our_team_img6 from '../../../Components/Assets/team-img6.jpg';
// import our_team_img7 from '../../../Components/Assets/team-img7.jpg';
// import our_team_img8 from '../../../Components/Assets/team-img8.jpg';
// import our_team_img9 from '../../../Components/Assets/team-img9.jpg';

// import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons';
const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Vivek Japala',
      role: 'Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Vivek has over 15 years of experience in tire manufacturing and innovation.',
      phone: '123-456-7890',
    },
    {
      name: 'Vivek Japala',
      role: 'Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Ananya oversees the smooth functioning of operations with a focus on quality.',
      phone: '987-654-3210',
    },
    {
      name: 'Vivek Japala',
      role: 'Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Ravi is the brain behind our cutting-edge Runflat Tire Systems technologies.',
      phone: '456-789-1230',
    }
  ];
  return (
    <div className="our-team-page">
      <Navbar />
      
      {/* Top Carousel Section */}
      <section className="carousel-section">
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src={our_team_img1} alt="Team Member 1" />
            <Carousel.Caption>
              <h3>Our Expert Team</h3>
              <p>Meet the professionals who drive our success.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={our_team_img2} alt="Team Member 2" />
            <Carousel.Caption>
              <h3>Our Visionaries</h3>
              <p>Leading the way with innovation and expertise.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={our_team_img3} alt="Team Member 3" />
            <Carousel.Caption>
              <h3>Dedicated Leaders</h3>
              <p>Empowering our team for excellence.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Team Information */}
      <section className="team-info animate-left">
      <div className="our-team-container">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-bio">{member.bio}</p>
            <div className="team-member-contact">
              <FontAwesomeIcon icon={faPhone} className="team-member-icon" />
              <span>{member.phone}</span>
            </div>
            <div className="team-member-social">
              <FontAwesomeIcon icon={faBriefcase} className="team-member-icon" />
              <span>LinkedIn</span>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>

      {/* Bottom Carousel Section */}
      <section className="carousel-section">
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src={our_team_img4} alt="Team Member 4" />
            <Carousel.Caption>
              <h3>Passionate Leaders</h3>
              <p>Our leaders are passionate about making a difference.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={our_team_img5} alt="Team Member 5" />
            <Carousel.Caption>
              <h3>Teamwork and Innovation</h3>
              <p>Collaborating to create innovative solutions for our clients.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={our_team_img6} alt="Team Member 6" />
            <Carousel.Caption>
              <h3>Strategic Growth</h3>
              <p>We focus on long-term strategies for sustainable growth.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <Footer />
    </div>
  );
}

export default OurTeam;
