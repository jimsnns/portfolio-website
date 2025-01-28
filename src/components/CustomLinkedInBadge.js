import React from 'react';
import './CustomLinkedInBadge.css'; // Import the custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const CustomLinkedInBadge = () => {
  return (
    <div className="custom-linkedin-badge">
      <div className="badge-banner">
        <FontAwesomeIcon icon={faLinkedin} size="1.5x" color="#FFFFFF" className="linkedin-icon" />
        <span className="banner-text">Connect with Me</span>
      </div>
      <a
        href="https://www.linkedin.com/in/dimitris-sinanis-5a58aa153"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <img
          src="/profile-picture.jpeg" // Replace with your profile picture URL
          alt="LinkedIn Profile"
          className="profile-picture-linkedin"
        />
        <div className="badge-details">
          <h2>Dimitris Sinanis</h2>
          <p>Associate Full Stack Software Engineer | Intelligent Decisions at Qualco</p>
          <p>QUALCO | Piraeus University of Applied Sciences</p>
        </div>
      </a>
    </div>
  );
};

export default CustomLinkedInBadge;
