// Home.js
import React, { useRef } from 'react';
import CustomNavbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Roadmap from '../components/Roadmap';
import Events from '../components/Events';
import './Home.css';
import Partical from '../components/Partical';
import ProgressBar from '../components/ProgressBar'; // Assuming you use this
import RoboShare from '../components/RoboShare';
import PageTransition from '../components/PageTransition';
export default function Home() {
  // Create refs for each section
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const roadmapRef = useRef(null);
  const eventsRef = useRef(null);
  const roboshareRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth', // Enable smooth scrolling
        block: 'start',      // Align the top of the element with the top of the viewport
      });
    }
  };

  // Define your navigation items as an array of objects
  const navItems = [
    { label: 'Projects', scrollFunction: () => scrollToSection(projectsRef) },
    { label: 'Roadmap', scrollFunction: () => scrollToSection(roadmapRef) },
    { label: 'Events', scrollFunction: () => scrollToSection(eventsRef) },
    { label: 'RoboShare', scrollFunction: () => scrollToSection(roboshareRef) },
  ];

  return (
    <div className="Home">
      {/* Fixed Navbar */}
      {/* <ProgressBar/> */}
       <Partical/>
      <PageTransition/>
      <CustomNavbar
        navItems={navItems} // Pass the dynamic array of navigation items
        scrollToHero={() => scrollToSection(heroRef)}
        title='Robonity' // Keep scrollToHero for the brand
      />

     

      {/* Snap Scroll Container */}
      <div className="scroll-container">
        <section id="hero" className="section" ref={heroRef}> {/* Attach ref */}
          <Hero
            title="Robonity"
            subtitle="Empowering Robotics Innovation"
            description="Join our journey in building autonomous systems, intelligent machines, and impactful robotics projects for the future."
            imageSrc="https://via.placeholder.com/600x400.png?text=Robotics+Showcase"
          />
        </section>

        <section id="projects" className="section" ref={projectsRef}> {/* Attach ref */}
          <Projects />
        </section>

        <section id="roadmap" className="section" ref={roadmapRef}> {/* Attach ref */}
          <Roadmap />
        </section>

        <section id="events" className="section" ref={eventsRef}> {/* Attach ref */}
          <Events />
        </section>
        <section id="roboshare" className="section" ref={roboshareRef}> {/* Attach ref */}
          <RoboShare />
        </section>
      </div>
    </div>
  );
}