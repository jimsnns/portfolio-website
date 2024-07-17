// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">01. Home</Link></li>
          <li><Link to="/about">02. About</Link></li>
          <li><Link to="/projects">03. Projects</Link></li>
          <li><Link to="/contact">04. Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
