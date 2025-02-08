// src/components/Projects.js
import React from 'react';
import './Projects.css';
import { useSearchParams } from 'react-router-dom';

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedProject = searchParams.get('selected');

  const projectsList = [
    {
      id: 'unet',
      title: "Brain Tumor Image Segmentation Using U-Net",
      description1: "This project, developed as part of my Master's thesis, focuses on data preprocessing and normalization to prepare medical imaging data for a convolutional neural network (CNN). The goal is to train a machine learning model to classify different brain tumor types using image segmentation techniques.",
      description2: "To achieve this, I implemented the U-Net architecture, known for its high performance and accuracy in medical image segmentation tasks. The entire project was developed in Jupyter notebooks to facilitate testing and experimentation.",
      description3: "For more details, including code and implementation insights, visit my GitHub repository.",
      github: "https://github.com/jimsnns/MSc_ML_Project",
      image: "U_Net Architecture.png"
    },
    {
      id: 'webapp',
      title: "Brain Tumor Prediction & Analysis Web Application",
      description1: "This web application is designed for the medical imaging community to predict and analyze brain tumors using MRI scans. Built with Streamlit, it serves as a deployment platform for my Brain Tumor Segmentation model, providing an intuitive interface for medical professionals to upload and analyze MRI scans effortlessly.",
      description2: "By integrating advanced image processing and deep learning techniques, the application enhances diagnostic efficiency, making AI-powered tumor segmentation accessible in real-time.",
      description3: "Explore the project on GitHub for more details.",
      github: "https://github.com/jimsnns/BraTS_ML_Predictor",
      image: "brats_webapp.png"
    },
    {
      id: 'portfolio',
      title: "My Portfolio Website",
      description1: "This portfolio website is built with React and deployed on Vercel, showcasing my projects, skills, and expertise as a Software Engineer. Designed with a responsive and user-friendly interface, it ensures a seamless browsing experience across all devices.",
      description2: "The website is designed to be responsive and easy to navigate, providing a seamless experience for visitors.",
      description3: "Explore the project on GitHub for more details.",
      github: "https://github.com/jimsnns/Portfolio-Website",
      image: "portfolio_website.gif"
    }
  ];

  const handleReset = () => {
    setSearchParams({});
  };

  const handleProjectClick = (projectId) => {
    if (!selectedProject) {
      setSearchParams({ selected: projectId });
    }
  };

  return (
    <div className="projects-container projects-text" data-aos="fade-up" data-aos-delay="100">
      <h1>My Projects</h1>
      {!selectedProject ? (
        <>
          <p>Welcome to my projects showcase! As a Software Engineer passionate about machine learning and web development, 
          I've worked on various projects that demonstrate my technical expertise and problem-solving abilities. 
          My portfolio includes sophisticated ML models for medical imaging and modern web applications.</p>
          
          <p>You can explore my complete work on my <a href="https://github.com/jimsnns" target="_blank" rel="noopener noreferrer">GitHub profile</a>. 
          Each project represents a unique challenge and demonstrates my commitment to creating impactful solutions 
          using cutting-edge technologies.</p>
          
          <p>Below are some of my featured projects that highlight my expertise in machine learning, 
          web development, and software engineering:</p>
        </>
      ) : (
        <button onClick={handleReset} className="reset-button">
          ← Back to All Projects
        </button>
      )}
      
      <div className={`projects-grid ${selectedProject ? 'single-project' : ''}`}>
        {projectsList
          .filter(project => !selectedProject || project.id === selectedProject)
          .map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${selectedProject === project.id ? 'expanded' : ''}`}
            onClick={() => handleProjectClick(project.id)}
            style={{ cursor: selectedProject ? 'default' : 'pointer' }}
          >
            {!selectedProject && <div className="hover-message">Click to view</div>}
            <img 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description1}</p>
            <p>{project.description2}</p>
            <p>{project.description3}</p>
            <p>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-button"
              >
                View on GitHub →
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
