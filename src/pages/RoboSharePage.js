import React, {useRef} from 'react'
import CustomNavbar from '../components/Navbar';
import Partical from '../components/Partical';
import Hero from '../components/Hero';
import { redirect } from 'react-router-dom';

export default function RoboSharePage() {
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

    const redirect = (path) => {
      window.location.href = path; // Redirect to the specified path
    };
  
    // Define your navigation items as an array of objects
    const navItems = [
      { label: 'Robonity', scrollFunction: () => redirect('/') }, // Redirect to Robonity
      { label: 'Explore', scrollFunction: () => scrollToSection(roadmapRef) },
      { label: 'My Components', scrollFunction: () => scrollToSection(eventsRef) },
      { label: 'Catagory', scrollFunction: () => scrollToSection(roboshareRef) },
    ];
  
  return (<>
    <CustomNavbar
  navItems={navItems}
  scrollToHero={() => scrollToSection(heroRef)} // Correct function syntax
  title='RoboShare' // Properly passed as a separate prop
/>


    <Partical/>


     <section id="hero" className="section" ref={heroRef}> {/* Attach ref */}
          <Hero
            title="RoboShare"
            subtitle="Empowering Robotics Innovation"
            description="Platform for sharing and exploring modular robotics components, designs, and code."
            imageSrc="https://via.placeholder.com/600x400.png?text=Robotics+Showcase"
          />
        </section>
  </>
  )
}
