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
  
    <div className="about-container" data-aos="fade-up" data-aos-delay="100">
      <h1 data-aos="fade-in" data-aos-delay="100">About Me</h1>
      <p data-aos="fade-in" >I am a creative Software Engineer with a passion for developing applications and 
        websites that improve the user experience. I specialize in developing dynamic websites using React, 
        JavaScript, and CSS, and have experience creating responsive designs that meet the needs of every user.</p>
      <p data-aos="fade-in" data-aos-delay="100" >I have worked with various clients to create modern websites and applications, and I always strive 
      to provide solutions that combine functionality and aesthetics. I believe in creating clean and 
      pleasant user experiences, and I always work to ensure the excellent quality and efficiency of 
      my projects.</p>


      <p data-aos="fade-in" data-aos-delay="100" >When I'm not coding, I like to explore new places, read books or articles about technology, 
        and watch science fiction movies.</p>


      <p data-aos="fade-in" data-aos-delay="100" >If you'd like to collaborate or just discuss more about my work, feel free to contact me via LinkedIn or the contact form.</p>
      <div className="App">
        

      <CustomLinkedInBadge/>
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
