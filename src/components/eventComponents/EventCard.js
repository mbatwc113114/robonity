import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';

const EventCard = ({
  title,
  description,
  imageSrc,
  date,
  mode, // 'Online' or 'Offline'
  buttonText,
  onButtonClick,
    path, // Path for the event details page
}) => {
  return (
    <div className="event-card">
      {imageSrc && <img src={imageSrc} alt={title} className="event-card-image" />}
      <div className="event-card-content">
        <h3 className="event-card-title">{title}</h3>
        <p className="event-card-description">{description}</p>
        
        <div className="event-card-meta">
          <span className="event-card-date">
            📅 {date}
          </span>
          <span className={`event-card-mode ${mode === 'Online' ? 'online' : 'offline'}`}>
            {mode}
          </span>
        </div>

        {buttonText && (
            <Link to={path} className="event-card-link">
          <button className="event-card-button" onClick={onButtonClick}>
            {buttonText}
          </button>
            </Link>
        )}
      </div>
    </div>
  );
};

export default EventCard;
