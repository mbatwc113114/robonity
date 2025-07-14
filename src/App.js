import React from 'react';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import Events from './components/Events';
import './App.css';
import Partical from './components/Partical';

function App() {
  return (
    <div className="App">
      {/* Fixed Navbar */}
      <CustomNavbar />
      <Partical/>

      {/* Snap Scroll Container */}
      <div className="scroll-container">
        <section id="hero" className="section">
          <Hero
           title="Robonity"
            subtitle="Empowering Robotics Innovation"
            description="Join our journey in building autonomous systems, intelligent machines, and impactful robotics projects for the future."
            imageSrc="https://via.placeholder.com/600x400.png?text=Robotics+Showcase"
          
          />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="roadmap" className="section">
          <Roadmap />
        </section>

        <section id="events" className="section">
          <Events />
        </section>
      </div>
    </div>
  );
}

export default App;
