// src/App.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function handleClick()
{
     window.open("/CV_Dimitris Sinanis_1.pdf","_blank");
     return true;
}

window.scrollTo(0, 0);

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <Router>
      <div>
        <header>
          <div className="header-content">
            <span className="logo">
              Dimitris Sinanis
            </span>
            <button 
              className="mobile-menu-button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
            <nav className={isMobileMenuOpen ? 'show' : ''}>
              <ul>
                <li>
                  <NavLink to="/" className="nav_menu" end onClick={closeMobileMenu}>01. Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav_menu" onClick={closeMobileMenu}>02. About</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="nav_menu" onClick={closeMobileMenu}>03. Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav_menu" onClick={closeMobileMenu}>04. Contact</NavLink>
                </li>
                <li>
                  <button className='resume-button' onClick={() => { handleClick(); closeMobileMenu(); }}>Resume</button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main onClick={closeMobileMenu}>
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
