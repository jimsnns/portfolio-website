// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { initScrollAnimations } from './ScrollAnimations';

function handleClick()
{
     window.open("/CV_Dimitris Sinanis_1.pdf","_blank");
     return true;
}

function App() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <Router>
      <div>
        <header>
          <div className="header-content">
            <span className="logo">
              Dimitris Sinanis
            </span>
            <nav>
              <ul>
                <li>
                  <Link to="/" className="nav_menu">01. Home</Link>
                </li>
                <li>
                  <Link to="/about" className="nav_menu">02. About</Link>
                </li>
                <li>
                  <Link to="/projects" className="nav_menu">03. Projects</Link>
                </li>
                <li>
                  <Link to="/contact" className="nav_menu">04. Contact</Link>
                </li>
                <li>
                  <button className='resume-button' onClick={handleClick}>Resume</button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 Dimitris Sinanis. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}


export default App;
