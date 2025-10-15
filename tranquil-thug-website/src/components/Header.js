import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>Tranquil Thug</h1>
            <p>Where Boujee Meets Cozy</p>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/haruki-villa">Our Villa</Link></li>
            <li><Link to="/expansion-areas">Locations</Link></li>
            <li><Link to="/lease-your-property" className="lease-nav-link">💰 Lease Your Property</Link></li>
            <li>
              <a 
                href="https://www.airbnb.com/rooms/1275311065708744882" 
                target="_blank" 
                rel="noopener noreferrer"
                className="book-now-btn pulse-nav"
              >
                🏠 BOOK NOW
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
