// Header.js
import React from 'react';
import './Header.css'; // Import your CSS file for styling
import log from './Logo.jpg'

function Header({children}) {
  return (
    <header className="header">
      <div className="logo">
        <img src={log} alt="Pitch Grader" />
      </div>
      <nav className="navigation">
        {children}
      </nav>
    </header>
  );
}

export default Header;