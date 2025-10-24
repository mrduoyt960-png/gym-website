import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import SoulWhispers from './pages/SoulWhispers';
import GymKey from './pages/GymKey';
import Contact from './pages/Contact';
import Waitlist from './pages/Waitlist';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="wellnex-logo">
            <span className="well">Well</span><span className="nex">nex</span>
          </div>
          <div className="loading-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/soulwhispers" element={<SoulWhispers />} />
            <Route path="/gymkey" element={<GymKey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;