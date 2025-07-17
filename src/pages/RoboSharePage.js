import React, { useRef } from 'react';
import CustomNavbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partical from '../components/Partical';

export default function RoboSharePage() {
  // Refs for scroll sections
  const heroRef = useRef(null);
  const exploreRef = useRef(null);
  const componentsRef = useRef(null);
  const categoryRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Simple redirect function (renamed to avoid conflict)
  const navigateTo = (path) => {
    window.location.href = path;
  };

  // Navigation config
  const navItems = [
    { label: 'Robonity', scrollFunction: () => navigateTo('/') }, // Back to home
    { label: 'Explore', scrollFunction: () => scrollToSection(exploreRef) },
    { label: 'My Components', scrollFunction: () => scrollToSection(componentsRef) },
    { label: 'Category', scrollFunction: () => scrollToSection(categoryRef) },
  ];

  return (
    <div className="RoboSharePage">
      <CustomNavbar
        navItems={navItems}
        scrollToHero={() => scrollToSection(heroRef)}
        title="RoboShare"
      />

      <Partical />

      {/* Hero Section */}
      <section id="hero" ref={heroRef}>
        <Hero
          title="RoboShare"
          subtitle="Empowering Robotics Innovation"
          description="Platform for sharing and exploring modular robotics components, designs, and code."
          imageSrc="https://via.placeholder.com/600x400.png?text=RoboShare+Showcase"
        />
      </section>

      {/* Placeholder sections for navigation targets */}
      <section id="explore" ref={exploreRef}>
        {/* Add your Explore component or content here */}
      </section>

      <section id="components" ref={componentsRef}>
        {/* Add your My Components section here */}
      </section>

      <section id="category" ref={categoryRef}>
        {/* Add your Category section here */}
      </section>
    </div>
  );
}