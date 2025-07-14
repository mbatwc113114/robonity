import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, description, imageSrc }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <p className="hero-description">{description}</p>
      </div>
      {imageSrc && (
        <div className="hero-image-container">
          <img src={imageSrc} alt={title} className="hero-image" />
        </div>
      )}
    </section>
  );
};

export default Hero;
