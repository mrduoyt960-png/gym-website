import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/logo.png';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
         <img src={logo} alt="Wellnex Logo" className="logo-img" />
          <span className="well">Well</span><span className="nex">nex</span>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
          <Link to="/soulwhispers" className={location.pathname === '/soulwhispers' ? 'active' : ''} onClick={closeMenu}>SoulWhispers</Link>
          <Link to="/gymkey" className={location.pathname === '/gymkey' ? 'active' : ''} onClick={closeMenu}>GymKey</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
          <Link to="/waitlist" className="btn btn-primary" onClick={closeMenu}>Join Waitlist</Link>
        </div>
        
        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
       


      </div>
    </motion.nav>
  );
};

export default Navbar;