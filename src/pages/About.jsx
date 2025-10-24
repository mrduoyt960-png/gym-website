// pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import aboutImage from '../assets/about-wellnex.jpg';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';

const About = () => {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="page-hero">
        <div className="container">
          <h1>About Wellnex</h1>
          <p>Where Wellness Meets What's Next</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                At Wellnex Systems, we believe the future of health and fitness lies in intelligent, integrated, and deeply human-centered technology. Born from the fusion of "Wellness" and "Next," our platform is designed to elevate how people connect with their bodies, minds, and communities—anytime, anywhere.
              </p>
              <p>
                We're not just building apps. We're building a movement that transforms how individuals, gyms, and wellness providers approach health in the digital age.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                We envision a world where technology seamlessly enhances human wellness rather than complicating it. A world where your mental health, physical fitness, and nutritional needs are all connected in one intelligent ecosystem that understands you and adapts to your unique journey.
              </p>
              
              <h2>Our Values</h2>
              <div className="values-list">
                <div className="value-item">
                  <h3>Human-Centered Design</h3>
                  <p>Every feature we build starts with the human experience and works backward from there.</p>
                </div>
                <div className="value-item">
                  <h3>Innovation with Purpose</h3>
                  <p>We don't chase trends—we solve real problems with thoughtful technology.</p>
                </div>
                <div className="value-item">
                  <h3>Privacy First</h3>
                  <p>Your health data is yours. We protect it fiercely and transparently.</p>
                </div>
                <div className="value-item">
                  <h3>Inclusive Wellness</h3>
                  <p>Wellness isn't one-size-fits-all. We build for diverse bodies, minds, and lifestyles.</p>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="about-image">
                <div className="image-placeholder">
                  <img src={aboutImage} alt="About Wellnex" className="about-img" />
                </div>
              </div>
              
              <div className="stats">
                <div className="stat-item">
                  <h3>50K+</h3>
                  <p>Active Users</p>
                </div>
                <div className="stat-item">
                  <h3>200+</h3>
                  <p>Partner Gyms</p>
                </div>
                <div className="stat-item">
                  <h3>95%</h3>
                  <p>User Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-section">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder"> <img src={about1} alt="About Wellnex" className="about-img" /></div>
              </div>
              <h3>Sarah Ahmed</h3>
              <p>Chief Executive Officer</p>
              <p>Former health tech executive with 15+ years of experience in digital wellness innovation.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder"> <img src={about2} alt="About Wellnex" className="about-img" /></div>
              </div>
              <h3>Ali Hassan</h3>
              <p>Chief Technology Officer</p>
              <p>AI and machine learning expert passionate about creating intuitive health solutions.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder"> <img src={about3} alt="About Wellnex" className="about-img" /></div>
              </div>
              <h3>Fatima Khan</h3>
              <p>Chief Product Officer</p>
              <p>Product visionary with a background in psychology and human-centered design.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;