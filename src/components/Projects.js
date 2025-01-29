// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "BraTS 2020 - Brain Tumor Segmentation",
      description: "Developed as part of my Master's thesis, this project focuses on automating the detection and segmentation of brain tumors using CNNs and multimodal MRI scans.",
      github: "https://github.com/jimsnns/MSc_ML_Project",
    },
    {
      id: 2,
      title: "Brats Machine Learning Predictor - Web Application",
      description: "A web application designed for the medical imaging community to predict and analyze brain tumors using MRI scans. This web application is designed in order to deploy my Brain Tumor Segmentation model.",
      github: "https://github.com/jimsnns/BraTS_ML_Predictor",
    }
  ];

  return (
    <div className="projects-container projects-text ">
      <h1>My Projects</h1>
      <p>You can check my <a href="https://github.com/jimsnns" target="_blank" rel="noopener noreferrer">GitHub repository</a> where you can find all my projects.</p>
      <p>Below you can see my most recent and most interesting projects.</p>
      
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card" onClick={() => window.open(project.github, '_blank')}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
