// src/components/Home.js
import React from 'react';
import './Home.css';
import Tabs from './Tabs';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects?selected=${projectId}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.scrollTo(0, 0);
  
  return (
    <div className="home">
      {/* <section className="hero"> */}
        <div className="hero-content">
          <div className="container-welcome" data-aos="fade-up" data-aos-delay="100">
            <div></div>
            <img src="/profile-picture.jpeg" className="profile-picture" data-aos="zoom-in" />
		        <div className="intro">
			        {/* <img src="images/profile-picture.jpg" /> */}
              <span className='welcome' data-aos="fade-in" data-aos-delay="100">Welcome.</span>
              <p className='paragraph' data-aos="fade-in" data-aos-delay="100">👋 Hello! I’m Dimitris Sinanis, a Software Engineer at Qualco, with expertise in SQL, C#, Python, and Full-Stack Development. Also, I'm an AI Enthusiast.</p>
              <p className='paragraph' data-aos="fade-in" data-aos-delay="100"> 🎯 What I Do:</p>
              <p className='paragraph' data-aos="fade-in" data-aos-delay="100">✔️ Develop Machine Learning models & scalable enterprise applications.</p>
              <p className='paragraph' data-aos="fade-in" data-aos-delay="100">✔️ Build with React, Angular for frontend & optimize databases & system architecture.</p>
              <p className='paragraph' data-aos="fade-in" data-aos-delay="100">✔️ Blend analytical thinking with clean, efficient & maintainable code.</p>
              {/* <div className='mouse' data-aos="fade-in" data-aos-delay="100"></div> */}
                {/* <div className='.home-hero__mouse-scroll-cont' data-aos="fade-in" data-aos-delay="100"></div> */}
          {/* <button>Get Started</button> */}
            </div>
          </div>
        </div>
      {/* </section> */}
      <section className="projects projects-container-home" data-aos="fade-up">
        <h2>My Projects</h2>
        <div className="project-cards" data-aos="fade-in" data-aos-delay="100">
          <div className="card" onClick={() => handleProjectClick('unet')}>
            <h3>Brain Tumor Image Segmentation Using U-Net</h3>
            <p>A project focused on segmenting brain tumors from MRI images using the U-Net architecture, with an emphasis on data preprocessing and normalization for improved machine learning model performance.</p>
          </div>

          <div className="card" onClick={() => handleProjectClick('webapp')}>
            <h3>Brain Tumor Prediction & Analysis Web Application</h3>
            <p>A Streamlit-based web app that allows medical professionals to upload and analyze MRI scans for brain tumor prediction and segmentation using deep learning.</p>
          </div>

          <div className="card" onClick={() => handleProjectClick('portfolio')}>
            <h3>My Portfolio Website</h3>
            <p>A personal portfolio website built with React to showcase my projects, skills, and experience, offering a responsive and user-friendly design.</p>
          </div>
        </div>
      </section>
      
      <Tabs />
    </div>
  );
}

export default Home;
