import React, { useState } from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div 
      className="home-container"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="spotlight-effect"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,150,255,0.05), transparent 40%)`
        }}
      />

      <div className="sidebar-wrapper">
        <Sidebar />
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          <section className="content-section">
            <About />
          </section>

          <section className="content-section">
            <Experience />
          </section>

          <section className="content-section">
            <Projects />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;