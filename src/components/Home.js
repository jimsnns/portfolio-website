// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome.</h1>
          <p className='intro-text'>Hello! I'm <span className='name'>Dimitris Sinanis</span> a passionate Software Support Engineer currently working at Qualco. With a strong background in SQL, C#, and Python, 
            I specialize in developing robust in resolving complex issues and develop efficient software solutions. 
            My commitment to continuous learning and improvement drives me to stay updated with the latest industry trends and technologies.</p>
          {/* <button>Get Started</button> */}
        </div>
      </section>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          <div className="card">
            <h3>Project 1</h3>
            <p>Brief description of the project.</p>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <p>Brief description of the project.</p>
          </div>
          <div className="card">
            <h3>Project 3</h3>
            <p>Brief description of the project.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
