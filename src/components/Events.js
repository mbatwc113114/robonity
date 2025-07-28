import React from 'react';
import './Events.css';
import EventCard from './eventComponents/EventCard'; // Adjust the import path as necessary

export default function Events() {
    return (
        <div className="events-section" id="events">
            <h2 className="events-title">Robonity Events</h2>
            <p className="events-description">Stay updated with robotics workshops, hackathons, and community meetups.</p>
            <div className="events-grid">
                <div className="d-flex flex-wrap gap-3 justify-content-center">
      <EventCard
        title="Robo Placer game"
        description="Join our exciting Robo Placer game to test your skills in robotics and strategy."
        imageSrc="https://example.com/drone.jpg"
        date="Aug 28, 2025"
        mode="Offline"
        buttonText="Register"
        onButtonClick={() => console.log("Register clicked")}
        path="/events/robo-placer-game" // Example path, adjust as needed
      />
      <EventCard
        title="Drone Workshop"
        description="Learn to build and fly drones with hands-on guidance."
        imageSrc="https://example.com/drone.jpg"
        date="July 28, 2025"
        mode="Offline"
        buttonText="Register"
        onButtonClick={() => console.log("Register clicked")}
        path="/events/drone-workshop" // Example path, adjust as needed
      />
      <EventCard
        title="React Bootcamp"
        description="Master React fundamentals and advanced concepts in 2 days."
        imageSrc="https://example.com/react.jpg"
        date="August 2, 2025"
        mode="Online"
        buttonText="Join Now"
        onButtonClick={() => console.log("Join Now clicked")}
        path="/events/react-bootcamp" // Example path, adjust as needed
      />
    </div>
            </div>
        </div>
    );
}
