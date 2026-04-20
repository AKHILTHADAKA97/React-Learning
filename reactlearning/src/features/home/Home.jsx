import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Modern React</h1>
        <p className="hero-subtitle">
          Built with React 19, React Router 6, and modern best practices.
          Lazy loading, responsive design, and fast performance.
        </p>
        <div className="hero-actions">
          <a href="/about" className="btn btn-primary">Learn More</a>
          <a href="/contact" className="btn btn-secondary">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

