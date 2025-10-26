// pages/SoulWhispers.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SoulWhispers.css';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import soulIcon from '../assets/soul-icon.jpg';



const SoulWhispers = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div 
      className="soulwhispers-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="app-hero">
        <div className="container">
          <div className="app-hero-content">
            <div className="app-icon-large">
 <img src={soulIcon} alt="SoulWhispers Icon" className="app-icon-img" />
              <div className="icon-soulwhispers-large"></div>
            </div>
            <h1>SoulWhispers</h1>
            <h2>Your Pocket-Sized Wellness Companion</h2>
            <p>
              SoulWhispers is a mindfulness and emotional wellness app designed to help users reconnect with their inner calm. Through guided meditations, reflective journaling, and AI-powered mood tracking, SoulWhispers nurtures mental clarity and emotional resilience in a fast-paced world.
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
    href="https://play.google.com/store/apps/details?id=com.innovadorsolutions.soulwispers" 
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
                    <div className="app-logo">SoulWhispers</div>
                    <div className="user-avatar">U</div>
                  </div>
                  <div className="mood-tracker">
                    <h3>How are you feeling today?</h3>
                    <div className="mood-options">
                      <div className="mood-option">😊</div>
                      <div className="mood-option">😌</div>
                      <div className="mood-option">😔</div>
                      <div className="mood-option">😰</div>
                      <div className="mood-option">😴</div>
                    </div>
                  </div>
                  <div className="daily-insight">
                    <h3>Today's Insight</h3>
                    <p>Remember to take three deep breaths when you feel overwhelmed. It's scientifically proven to reduce stress.</p>
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
                    <div className="feature-icon">🏥</div>
                    <h3>Telehealth and Diagnostics</h3>
                    <p>Connect with certified mental health professionals from the comfort of your home. Our integrated diagnostic tools help identify patterns and provide insights for better care.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📝</div>
                    <h3>Mood Journaling with AI Insights</h3>
                    <p>Track your emotional journey with our intelligent journal. Our AI analyzes your entries to identify patterns, triggers, and provides personalized recommendations.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">👥</div>
                    <h3>Personalized Providers</h3>
                    <p>Get matched with mental health professionals who specialize in your specific needs. Our algorithm considers your preferences, goals, and availability.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📅</div>
                    <h3>Seamless Booking & Check-in</h3>
                    <p>Schedule, reschedule, and check in for consultation sessions with just a few taps. Receive reminders and join virtual sessions directly from the app.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🧘</div>
                    <h3>Guided Meditations</h3>
                    <p>Access a library of guided meditations for stress, anxiety, sleep, and focus. New content added weekly based on user feedback and expert recommendations.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🎵</div>
                    <h3>Calming Soundscapes</h3>
                    <p>Immerse yourself in carefully curated soundscapes designed to enhance relaxation, focus, or sleep. Create your own mixes or choose from expert recommendations.</p>
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
                    <h3>Reduce Stress and Anxiety</h3>
                    <p>Regular use of SoulWhispers has been shown to decrease cortisol levels and improve stress management skills.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>Improve Sleep Quality</h3>
                    <p>Our sleep-focused meditations and soundscapes help users fall asleep faster and experience deeper, more restorative rest.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>Enhance Emotional Intelligence</h3>
                    <p>Through mood tracking and reflection, users develop greater self-awareness and emotional regulation skills.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>Build Resilience</h3>
                    <p>Develop coping mechanisms and mental fortitude to navigate life's challenges with greater ease and confidence.</p>
                  </div>
                </div>
                
                <div className="benefit-stats">
                  <div className="stat">
                    <h3>87%</h3>
                    <p>Report reduced stress after 2 weeks</p>
                  </div>
                  <div className="stat">
                    <h3>92%</h3>
                    <p>Experience improved sleep quality</p>
                  </div>
                  <div className="stat">
                    <h3>78%</h3>
                    <p>Feel more emotionally balanced</p>
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
                      <p>"SoulWhispers helped me find calm in chaos. It's like therapy in my pocket. The AI insights have been incredibly eye-opening."</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar"> <img src={avatar2} alt="Ayesha R." /></div>
                      <div className="author-info">
                        <h4>Ayesha R.</h4>
                        <p>Karachi</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>"As someone who struggles with anxiety, SoulWhispers has been a game-changer. The guided meditations are perfect for my busy schedule."</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar"><img src={avatar1} alt="Nadia K." /></div>
                      <div className="author-info">
                        <h4>Nadia K.</h4>
                        <p>Islamabad</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>"The telehealth feature connected me with a therapist who truly understands my needs. I've made more progress in 3 months than in years of traditional therapy."</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar"><img src={avatar3} alt="Fahad A." /></div>
                      <div className="author-info">
                        <h4>Fahad A.</h4>
                        <p>Lahore</p>
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
          <h2>Start Your Wellness Journey Today</h2>
          <p>Join thousands of users who have transformed their mental well-being with SoulWhispers.</p>
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
    href="https://play.google.com/store/apps/details?id=com.innovadorsolutions.soulwispers" 
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

export default SoulWhispers;