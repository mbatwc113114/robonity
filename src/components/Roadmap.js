import React from 'react';
import './Roadmap.css';
import Card from './Card';

export default function Roadmap() {
    const handleButtonClick = (title) => {
  alert(`You clicked on ${title}`);
};

    return (
        <div className="roadmap-section" id="roadmap">
            <h2 className="roadmap-title">Robonity Roadmap</h2>
            <p className="roadmap-description">See our milestones and upcoming robotics initiatives.</p>
            <div className="roadmap-grid">
               {/* <div className="roadmap-grid"> */}
        <Card
          title="Autonomous Drone"
          imageSrc=''
          description="A high-speed autonomous drone for indoor navigation."
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Autonomous Drone")}
        />
        <Card
          title="Swarm Robotics"
          imageSrc='{swarm}'
          description="Coordinated swarm robots for research and competitions."
          buttonText="See Details"
          onButtonClick={() => handleButtonClick("Swarm Robotics")}
        />
        <Card
          title="AI Rover"
          imageSrc='{rover}'
          description="An AI-enabled rover for obstacle detection and path planning."
          buttonText="Explore"
          onButtonClick={() => handleButtonClick("AI Rover")}
        />
      </div>
            {/* </div> */}
        </div>
    );
}
