// pages/GymKey.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GymKey.css';
import soulIcon from '../assets/soul-icon.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';

const GymKey = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div 
      className="gymkey-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="app-hero">
        <div className="container">
          <div className="app-hero-content">
            <div className="app-icon-large">
              <div className="icon-gymkey-large">
                <img src={soulIcon} alt="GymKey" />
              </div>
            </div>
            <h1>GymKey</h1>
            <h2>Smart Access to Fitness, Anytime</h2>
            <p>
              GymKey is your digital passport to fitness freedom. Whether you're a gym owner or a fitness enthusiast, GymKey connects users with partner gyms, tracks workouts, and simplifies access—all from a single app.
            </p>
          <div className="app-download">
  <a
    href="https://apps.apple.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary"
  >
    Download for iOS
  </a>
  <a
    href="https://play.google.com/store/apps/details?id=com.innovadorsolutions.gymkey"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary"
  >
    Download for Android
  </a>
</div>

          </div>
          <div className="app-hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">
                    <div className="app-logo">GymKey</div>
                    <div className="user-avatar">U</div>
                  </div>
                  <div className="gym-checkin">
                    <h3>Check In</h3>
                    <div className="qr-code">
                      <div className="qr-placeholder">QR Code</div>
                    </div>
                    <p>Scan at partner gym entrance</p>
                  </div>
                  <div className="workout-summary">
                    <h3>Today's Workout</h3>
                    <div className="workout-stats">
                      <div className="stat">
                        <span className="stat-value">45</span>
                        <span className="stat-label">min</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">320</span>
                        <span className="stat-label">cal</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">8</span>
                        <span className="stat-label">ex</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="app-details">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => handleTabChange('features')}
            >
              Features
            </button>
            <button 
              className={`tab ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => handleTabChange('benefits')}
            >
              Benefits
            </button>
            <button 
              className={`tab ${activeTab === 'testimonials' ? 'active' : ''}`}
              onClick={() => handleTabChange('testimonials')}
            >
              Testimonials
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'features' && (
              <motion.div 
                className="features-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="feature-icon">🔑</div>
                    <h3>Seamless Check-in</h3>
                    <p>No more fumbling with membership cards or keys. Simply scan your digital pass at any partner gym for instant access. Our QR code technology ensures secure, contactless entry.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Workout Tracking</h3>
                    <p>Log your exercises, sets, reps, and weights with our intuitive tracking system. Monitor your progress over time with detailed analytics and performance insights.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">👤</div>
                    <h3>Membership Management</h3>
                    <p>For gym owners, manage memberships, process payments, and track attendance all in one place. Automate renewals and reduce administrative workload.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">⏰</div>
                    <h3>Real-time Schedules</h3>
                    <p>View class schedules, book sessions, and receive reminders. Never miss your favorite class again with our integrated booking system.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🏋️</div>
                    <h3>Workout Library</h3>
                    <p>Access hundreds of workout routines for all fitness levels. Filter by equipment, duration, and muscle groups to find the perfect workout for your goals.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🏆</div>
                    <h3>Challenges & Rewards</h3>
                    <p>Join fitness challenges, earn badges, and unlock rewards. Stay motivated with gamification elements that make fitness fun and engaging.</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'benefits' && (
              <motion.div 
                className="benefits-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="benefit-list">
                  <div className="benefit-item">
                    <h3>For Fitness Enthusiasts</h3>
                    <p>Access multiple gyms with a single membership. Never be limited by location again. Work out at home, while traveling, or wherever life takes you.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>For Gym Owners</h3>
                    <p>Reduce administrative overhead, increase member engagement, and attract new customers through our network. Focus on what you do best—helping people get fit.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>For Personal Trainers</h3>
                    <p>Manage your clients, create custom workout plans, and track their progress all in one place. Expand your reach by offering virtual training sessions.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>For Corporate Wellness</h3>
                    <p>Offer your employees flexible fitness options that work with their schedules. Promote a healthier workplace with our corporate wellness solutions.</p>
                  </div>
                </div>
                
                <div className="benefit-stats">
                  <div className="stat">
                    <h3>200+</h3>
                    <p>Partner Gyms</p>
                  </div>
                  <div className="stat">
                    <h3>50K+</h3>
                    <p>Active Members</p>
                  </div>
                  <div className="stat">
                    <h3>95%</h3>
                    <p>Member Retention</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'testimonials' && (
              <motion.div 
                className="testimonials-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-grid">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>"GymKey has transformed how I manage my gym. My members love the convenience, and I've reduced my administrative work by 70%. It's a game-changer for gym owners."</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar"><img src={avatar2} alt="Nadia K." /></div>
                      <div className="author-info">
                        <h4>Imran M.</h4>
                        <p>Gym Owner, Lahore</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>"As someone who travels frequently for work, GymKey is perfect. I can work out at different gyms in different cities without needing multiple memberships."</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar"><img src={avatar1} alt="Ayesha R." /></div>
                      <div className="author-info">
                        <h4>Sana K.</h4>
                        <p>Karachi</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>"The workout tracking feature has helped me stay consistent and see real progress. I love being able to look back at my stats from months ago and see how far I've come."</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar"><img src={avatar3} alt="Fahad A." /></div>
                      <div className="author-info">
                        <h4>Fahad A.</h4>
                        <p>Islamabad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      <section className="app-cta">
        <div className="container">
          <h2>Unlock Your Fitness Potential</h2>
          <p>Join the GymKey community and experience fitness freedom like never before.</p>
          <div className="app-download">
            <a
    href="https://apps.apple.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary"
  >
    Download for iOS
  </a>
  <a
    href="https://play.google.com/store/apps/details?id=com.innovadorsolutions.gymkey"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary"
  >
    Download for Android
  </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default GymKey;