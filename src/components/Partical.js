import React, { useEffect } from 'react';
import './Partical.css';

const Partical = () => {
  useEffect(() => {
    const particleContainer = document.getElementById('partical');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Position particle at the center of the screen
      particle.style.left = '50%';
      particle.style.top = '50%';

      // Calculate a random angle for radiation
      const angle = Math.random() * 2 * Math.PI; // Full circle in radians
      
      // Determine end points far beyond the screen edges
      const distance = Math.max(screenWidth, screenHeight) * 1.5; // Ensure it goes off-screen
      const endX = (Math.cos(angle) * distance) + (screenWidth / 2);
      const endY = (Math.sin(angle) * distance) + (screenHeight / 2);

      // Set CSS custom properties for animation
      particle.style.setProperty('--endX', `${endX}px`);
      particle.style.setProperty('--endY', `${endY}px`);

      // Randomize animation duration for variety
      particle.style.animationDuration = `${2 + Math.random() * 3}s`; // Shorter duration for faster movement
      particle.style.animationDelay = `${Math.random() * 0.5}s`; // Stagger starts slightly

      particleContainer.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    // Create initial burst of particles
    for (let i = 0; i < 50; i++) createParticle(); // Reduced initial count, adjust as needed

    // Continuously create new particles
    const interval = setInterval(createParticle, 100); // Slower interval for continuous flow

    return () => clearInterval(interval);
  }, []);

  return <div id="partical"></div>;
};

export default Partical;