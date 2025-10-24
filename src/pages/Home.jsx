import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/hero-wellnex.jpg';
import soulIcon from '../assets/soul-icon.jpg';
import avatar1 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';


const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg"
          style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
        >

          <div 
            className="hero-gradient"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
            }}
          ></div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="container">
          <motion.div className="hero-content" variants={itemVariants}>
            <h1>Wellnex Systems</h1>
            <h2>Wellness, Reimagined for the Next Generation</h2>
            <p className="hero-subheadline">
              A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting edge HealthTech and fitness innovation.
            </p>
            <div className="btn-group">
              <Link to="/waitlist" className="btn btn-primary">Join the Movement</Link>
              <Link to="/about" className="btn btn-secondary">Explore Our Apps</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Wellnex Section */}
      <section className="about-wellnex">
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>About Wellnex</h2>
            <h3>Where Wellness Meets What's Next</h3>
          </motion.div>
          
          <motion.div className="about-content" variants={itemVariants}>
            <p>
              At Wellnex Systems, we believe the future of health and fitness lies in intelligent, integrated, and deeply human-centered technology. Born from the fusion of "Wellness" and "Next," our platform is designed to elevate how people connect with their bodies, minds, and communities—anytime, anywhere.
            </p>
            <p>
              We're not just building apps. We're building a movement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Apps Section */}
      <section className="flagship-apps">
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Our Flagship Apps</h2>
          </motion.div>
          
          <div className="apps-grid">
            <motion.div className="app-card" variants={itemVariants}>
              <div className="app-icon">
                <div className="icon-soulwhispers"><img src={soulIcon} alt="SoulWhispers Icon" className="app-icon-img" /></div>
              </div>
              <h3>SoulWhispers</h3>
              <h4>Your Pocket-Sized Wellness Companion</h4>
              <p>
                SoulWhispers is a mindfulness and emotional wellness app designed to help users reconnect with their inner calm. Through guided meditations, reflective journaling, and AI-powered mood tracking, SoulWhispers nurtures mental clarity and emotional resilience in a fast-paced world.
              </p>
              <div className="app-features">
                <div className="feature">
                  <div className="feature-icon">🏥</div>
                  <span>Telehealth and diagnostics</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">📝</div>
                  <span>Mood journaling with AI insights</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">👥</div>
                  <span>Personalized providers</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">📅</div>
                  <span>Seamless booking & check-in for consultation sessions</span>
                </div>
              </div>
              <Link to="/soulwhispers" className="btn btn-primary">Download SoulWhispers</Link>
            </motion.div>
            
            <motion.div className="app-card" variants={itemVariants}>
              <div className="app-icon">
                <div className="icon-gymkey"><img src={soulIcon} alt="SoulWhispers Icon" className="app-icon-img" /></div>
              </div>
              <h3>GymKey</h3>
              <h4>Smart Access to Fitness, Anytime</h4>
              <p>
                GymKey is your digital passport to fitness freedom. Whether you're a gym owner or a fitness enthusiast, GymKey connects users with partner gyms, tracks workouts, and simplifies access—all from a single app.
              </p>
              <div className="app-features">
                <div className="feature">
                  <div className="feature-icon">🔑</div>
                  <span>Seamless check-in at partner gyms</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">📊</div>
                  <span>Workout tracking and performance analytics</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">👤</div>
                  <span>Membership management for gym owners</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">⏰</div>
                  <span>Real-time class schedules and bookings</span>
                </div>
              </div>
              <Link to="/gymkey" className="btn btn-primary">Explore GymKey</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wellnex Section */}
      <section className="why-wellnex">
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Why Wellnex?</h2>
          </motion.div>
          
          <div className="features-grid">
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🌐</div>
              <h3>Integrated Wellness</h3>
              <p>Physical, mental, and emotional health in one ecosystem</p>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🤖</div>
              <h3>AI-Driven Personalization</h3>
              <p>Smart recommendations tailored to your goals</p>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">📈</div>
              <h3>Scalable for Providers</h3>
              <p>From boutique studios to national gym chains</p>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🚀</div>
              <h3>Built for the Future</h3>
              <p>Cloud-native, mobile-first, and privacy-conscious</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Coming Next Section */}
      <section className="whats-next">
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>What's Coming Next</h2>
          </motion.div>
          
          <motion.div className="next-content" variants={itemVariants}>
            <p>
              We're building a unified Wellnex Platform that brings together fitness, nutrition, mental health, and diagnostics into a single intelligent dashboard. Whether you're a user, trainer, or clinic—Wellnex will be your digital wellness command center.
            </p>
            
            <div className="coming-soon">
              <h3>Coming Soon:</h3>
              <div className="coming-items">
                <div className="coming-item">
                  <div className="coming-icon">⌚</div>
                  <span>Wearable integration</span>
                </div>
                <div className="coming-item">
                  <div className="coming-icon">🥗</div>
                  <span>Nutrition and meal planning</span>
                </div>
                <div className="coming-item">
                  <div className="coming-icon">🏢</div>
                  <span>Corporate wellness dashboards</span>
                </div>
              </div>
            </div>
            
            <Link to="/waitlist" className="btn btn-primary">Get Early Access</Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Testimonials</h2>
          </motion.div>
          
          <div className="testimonials-grid">
            <motion.div className="testimonial-card" variants={itemVariants}>
              <div className="testimonial-content">
                <p>"SoulWhispers helped me find calm in chaos. It's like therapy in my pocket."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"><img src={avatar1} alt="Ayesha R." /></div>
                <div className="author-info">
                  <h4>Ayesha R.</h4>
                  <p>Karachi</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="testimonial-card" variants={itemVariants}>
              <div className="testimonial-content">
                <p>"GymKey has transformed how I manage my gym. My members love the convenience."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"><img src={avatar3} alt="Fahad A." /></div>
                <div className="author-info">
                  <h4>Imran M.</h4>
                  <p>Gym Owner, Lahore</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="stay-connected">
        <div className="container">
          <motion.div className="connected-content" variants={itemVariants}>
            <h2>Stay Connected</h2>
            <p>Be the first to experience the full Wellnex platform.</p>
            <div className="btn-group">
              <Link to="/waitlist" className="btn btn-primary">Join Our Waitlist</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;