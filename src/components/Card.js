import React from 'react';
import './Card.css';

const Card = ({ title, imageSrc, description, buttonText, onButtonClick }) => {
  return (
    <div className="custom-card">
      {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {buttonText && (
          <button className="card-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
