// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "Project 1",
      description: "Περιγραφή του πρώτου project",
      github: "https://github.com/jimsnns/BraTS_ML_Predictor",
      image: "https://raw.githubusercontent.com/jimsnns/BraTS_ML_Predictor/main/banner.png",
      // demo: "https://demo-link-1.com"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Περιγραφή του δεύτερου project",
      github: "https://github.com/jimsnns/BraTS_ML_Predictor",
      image: "https://raw.githubusercontent.com/jimsnns/BraTS_ML_Predictor/main/banner.png",
      // demo: "https://demo-link-2.com"
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>You can check my <a href="https://github.com/jimsnns" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more projects.</p>
      <p>Below you can see my most recent and most interesting projects.</p>
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            {project.image && (
              <img 
                src={project.image} 
                alt={`${project.title} banner`}
                className="project-banner"
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-cards">
              <button href={project.github} target="_blank" rel="noopener noreferrer">GitHub</button>
              {/* <button href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
