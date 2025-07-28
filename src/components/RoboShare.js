// src/components/RoboShare.js

import React from 'react';
import './RoboShare.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
export default function RoboShare() {
  const RoboShareRedirect = () => {
    window.location.href = "/#/roboshare"; // Redirect to the RoboShare page
  };
  return (
    <div className="roboshare-section" id="roboshare">
      <h2 className="roboshare-title">RoboShare</h2>
      <p className="roboshare-description">
        Share and explore modular robotics components, designs, and code within the Robonity community.
      </p>
      <Link to='/roboshare'>
      <button className='btn_' >Visit</button>
  
  </Link>  </div>
  );
}
