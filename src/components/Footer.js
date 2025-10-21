import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tranquil Thug</h3>
            <p>Premium villa rentals in Maharashtra's most beautiful locations.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/tranquil_thug" target="_blank" rel="noopener noreferrer">
                📱 Instagram
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Current Location</h3>
            <p>Haruki Villa<br />
            Kusur, Lonavala<br />
            Maharashtra 410405</p>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📞 +91 93218 68163</p>
            <p>📧 hello@tranquilthug.com</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/haruki-villa">Our Villa</a></li>
              <li><a href="/lease-your-property">Partner With Us</a></li>
              <li><a href="/expansion-areas">Expansion Areas</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Tranquil Thug. All rights reserved. | Pet-friendly luxury stays in Maharashtra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
