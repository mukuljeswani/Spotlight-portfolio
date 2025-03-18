import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <p className="about-desc">
        I'm a passionate Full Stack Engineer focused on building accessible, intuitive, and user-centered applications. With expertise in modern web technologies, I create solutions that combine robust functionality with seamless user experiences.
      </p>
      
      <p className="about-desc">
        Currently, I'm crafting innovative solutions at <span className="highlight">Tarana Wireless</span> in Milpitas, CA, where I specialize in developing and optimizing mobile applications that make complex technologies accessible and user-friendly.
      </p>

      <p className="about-desc">
        Beyond coding, I'm an avid sports enthusiast - you'll often find me following <span className="highlight">Formula 1</span> races or catching up on <span className="highlight">Football</span> matches during weekends. I'm currently learning <span className="highlight">Español</span> and enjoy playing competitive <span className="highlight">badminton</span> matches in my free time.
      </p>
    </div>
  );
};

export default About;
