import React from 'react';
import './Events.css';

export default function Events() {
    return (
        <div className="events-section" id="events">
            <h2 className="events-title">Robonity Events</h2>
            <p className="events-description">Stay updated with robotics workshops, hackathons, and community meetups.</p>
            <div className="events-grid">
                {/* Event cards here */}
            </div>
        </div>
    );
}
