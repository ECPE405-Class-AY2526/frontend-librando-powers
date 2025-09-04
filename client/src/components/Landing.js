import React from 'react';

const Landing = ({ onGetStarted }) => {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            Welcome to <span style={styles.brand}>AuthApp</span>
          </h1>
          
          <p style={styles.subtitle}>
            A simple and secure authentication system built with React and Node.js
          </p>
          
          <p style={styles.description}>
            Experience seamless user registration, login, and account management 
            with JWT-based authentication and modern security practices.
          </p>
          
          <button onClick={onGetStarted} style={styles.ctaButton}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  },
  hero: {
    maxWidth: '800px',
    width: '100%'
  },
  content: {
    textAlign: 'center',
    color: 'white'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    lineHeight: '1.2'
  },
  brand: {
    color: '#ffd700',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    opacity: 0.9,
    fontWeight: '300'
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '2.5rem',
    opacity: 0.8,
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto 2.5rem'
  },
  ctaButton: {
    backgroundColor: '#ffd700',
    color: '#333',
    border: 'none',
    padding: '1rem 2.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
    marginBottom: '1.5rem'
  }
};

export default Landing;
    