import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our Modern React App</h1>
        <p>Built with the latest React patterns and best practices for scalable development.</p>
      </section>
      
      <section className="about-features">
        <div className="feature-card">
          <h3>Modern Architecture</h3>
          <p>Functional components, custom hooks, and scalable folder structure.</p>
        </div>
        <div className="feature-card">
          <h3>Performance First</h3>
          <p>Lazy loading, code splitting, optimized bundle size for fast user experience.</p>
        </div>
        <div className="feature-card">
          <h3>Responsive Design</h3>
          <p>Mobile-first approach with fluid typography and flexible layouts.</p>
        </div>
      </section>
    </div>
  );
};

export default About;

