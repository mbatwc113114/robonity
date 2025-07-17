import React from 'react';
import './Projects.css';
import Card from './Card'; // ✅ Make sure you import your Card component
import autonomousDroneImage from '../assets/autonomusDrone.webp'; 
import swarm from '../assets/swarm.webp'; // ✅ Import your images correctly
import rover from '../assets/aiRover.webp'; // ✅ Import your images correctly
// ✅ Define your button handler or pass a placeholder function
const handleButtonClick = (title) => {
  alert(`You clicked on ${title}`);
};

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Robonity Projects</h2>
      <p className="projects-description">
        Explore our ongoing and completed robotics projects designed for impactful innovation.
      </p>
      <div className="projects-grid">
        <Card
          title="Autonomous Drone"
          imageSrc={autonomousDroneImage}
          description="A high-speed autonomous drone for indoor navigation."
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Autonomous Drone")}
        />
        <Card
          title="Swarm Robotics"
          imageSrc={swarm}
          description="Coordinated swarm robots for research and competitions."
          buttonText="See Details"
          onButtonClick={() => handleButtonClick("Swarm Robotics")}
        />
        <Card
          title="AI Rover"
          imageSrc={rover}
          description="An AI-enabled rover for obstacle detection and path planning."
          buttonText="Explore"
          onButtonClick={() => handleButtonClick("AI Rover")}
        />
      </div>
    </div>
  );
}
