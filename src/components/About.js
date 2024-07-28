import React, { useEffect } from 'react';
import './About.css'; // Το CSS που περιέχει τα εξειδικευμένα στυλ
import CustomLinkedInBadge from './CustomLinkedInBadge';

function About() {
  useEffect(() => {
    // Δημιουργία script για το LinkedIn badge
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Καθαρισμός script για αποφυγή συγκρούσεων
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
  
    <div className="about-container">
      <h1>About Me</h1>
      <p>You can find me on .</p>
      <div className="App">
        
      <CustomLinkedInBadge />
      </div>
      {/* LinkedIn Badge */}
      {/* <div className="linkedin-badge-container">
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="dimitris-sinanis-5a58aa153"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://gr.linkedin.com/in/dimitris-sinanis-5a58aa153?trk=profile-badge"
          >
            Dimitris Sinanis
          </a>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default About;
