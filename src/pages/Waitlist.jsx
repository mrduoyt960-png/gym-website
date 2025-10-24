// pages/Waitlist.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Waitlist.css';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [app, setApp] = useState('all');
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValidEmail = (email) => {
  const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

 if (!isValidEmail(email)) {
    setFormStatus({
      submitted: true,
      error: true,
      message: 'Email must start with a letter and be valid.'
    });
    return;
  }
    // Simulate form submission
    if (email && name) {
      setFormStatus({
        submitted: true,
        error: false,
        message: `Thank you for joining the waitlist, ${name}! We'll notify you as soon as ${app === 'all' ? 'our apps' : app} is available.`
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setEmail('');
        setName('');
        setApp('all');
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 5000);
    } else {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      });
    }
  };

  return (
    <motion.div 
      className="waitlist-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="page-hero">
        <div className="container">
          <h1>Join the Waitlist</h1>
          <p>Be the first to experience the future of wellness</p>
        </div>
      </section>
      
      <section className="waitlist-content">
        <div className="container">
          <div className="waitlist-form-container">
            <div className="waitlist-info">
              <h2>Get Early Access</h2>
              <p>
                Join our waitlist to be among the first to experience the full Wellnex platform. 
                As a waitlist member, you'll receive:
              </p>
              
              <ul className="benefits-list">
                <li>Early access to new features before public release</li>
                <li>Exclusive discounts on premium subscriptions</li>
                <li>Direct line to our product team for feedback</li>
                <li>Special invitations to beta testing programs</li>
              </ul>
              
              <div className="waitlist-stats">
                <div className="stat">
                  <h3>5,000+</h3>
                  <p>Already on the waitlist</p>
                </div>
                <div className="stat">
                  <h3>Q3 2025</h3>
                  <p>Expected launch</p>
                </div>
              </div>
            </div>
            
            <div className="waitlist-form">
              <h2>Sign Up Now</h2>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="app">Interested In</label>
                  <select
                    id="app"
                    value={app}
                    onChange={(e) => setApp(e.target.value)}
                  >
                    <option value="all">All Wellnex Products</option>
                    <option value="soulwhispers">SoulWhispers</option>
                    <option value="gymkey">GymKey</option>
                    <option value="platform">Unified Platform</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary">Join Waitlist</button>
              </form>
              
              <p className="privacy-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3>When will the apps be available?</h3>
              <p>
                We're targeting a Q3 2025 launch for our unified platform. SoulWhispers and GymKey will have limited beta releases earlier for waitlist members.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Will the apps be free?</h3>
              <p>
                Both apps will have free versions with core features. Premium subscriptions will unlock advanced features like AI insights, unlimited journaling, and personalized workout plans.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>On which platforms will the apps be available?</h3>
              <p>
                We're launching on iOS and Android simultaneously, with a web version for desktop users following shortly after.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>How is my data protected?</h3>
              <p>
                Privacy is our top priority. All data is encrypted, and we never share personal information with third parties without explicit consent. We comply with all relevant data protection regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Waitlist;