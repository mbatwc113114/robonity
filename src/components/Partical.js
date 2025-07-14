import React, { useEffect } from 'react';
import './Partical.css';

const Partical = () => {
  useEffect(() => {
    const particleContainer = document.getElementById('partical');

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${5 + Math.random() * 5}s`;
      particle.style.opacity = Math.random().toString();
      particleContainer.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    const interval = setInterval(createParticle, 50);

    for (let i = 0; i < 150; i++) createParticle();

    return () => clearInterval(interval);
  }, []);

  return <div id="partical"></div>;
};

export default Partical;
