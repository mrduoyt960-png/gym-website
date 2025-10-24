import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="navbar-logo">
              <span className="well">Well</span><span className="nex">nex</span>
            </Link>
            <p>Empowering Wellness Through Technology</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Products</h4>
              <Link to="/soulwhispers">SoulWhispers</Link>
              <Link to="/gymkey">GymKey</Link>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>📧 info@wellnexsystems.com</p>
            <p>🌐 www.wellnexsystems.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Wellnex Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;