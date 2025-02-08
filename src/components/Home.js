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
              <p className='paragraph' data-aos="fade-in" data-aos-delay="100">Hello! I'm Dimitris, a passionate Software Engineer currently working at Qualco. </p>
              <p className='paragraph' data-aos="fade-in" data-aos-delay="100">With extensive expertise in SQL, C#, and Python, 
                I am a versatile Software Engineer passionate about crafting innovative solutions. 
                My technical journey spans from developing sophisticated machine learning models to 
                building scalable enterprise applications. I excel in full-stack development, 
                leveraging modern frameworks like React and Angular, while maintaining expertise in database optimization and 
                system architecture. My approach combines analytical problem-solving with creative implementation, 
                always striving for clean, efficient, and maintainable code that delivers exceptional user experiences.</p>
          {/* <button>Get Started</button> */}
            </div>
          </div>
        </div>
      {/* </section> */}
    <Tabs />
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
    </div>
  );
}

export default Home;
