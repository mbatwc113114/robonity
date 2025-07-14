import React from 'react';
import './Projects.css';
import Card from './Card'; // ✅ Make sure you import your Card component

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
          imageSrc="https://via.placeholder.com/300x200.png?text=Drone"
          description="A high-speed autonomous drone for indoor navigation."
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Autonomous Drone")}
        />
        <Card
          title="Swarm Robotics"
          imageSrc="https://via.placeholder.com/300x200.png?text=Swarm+Bots"
          description="Coordinated swarm robots for research and competitions."
          buttonText="See Details"
          onButtonClick={() => handleButtonClick("Swarm Robotics")}
        />
        <Card
          title="AI Rover"
          imageSrc="https://via.placeholder.com/300x200.png?text=AI+Rover"
          description="An AI-enabled rover for obstacle detection and path planning."
          buttonText="Explore"
          onButtonClick={() => handleButtonClick("AI Rover")}
        />
      </div>
    </div>
  );
}
