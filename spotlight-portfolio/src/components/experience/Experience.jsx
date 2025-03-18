import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import TechTags from '../TechTags/TechTags';
import { FiDownload } from 'react-icons/fi';
import resumePDF from '../../assets/Website_Resume.pdf';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'FrontEnd Engineer',
      company: 'Tarana Wireless, Inc.',
      location: 'Milpitas, CA',
      period: 'MAY 2022 — PRESENT',
      description: 'Developed and optimized React Native application with deep linking, OAuth authentication, offline maps with caching, and Redux for state management. Implemented native GRPC integration in Android using Kotlin, reducing latency by 35%. Streamlined distribution using Fastlane with 24 lanes. Enhanced performance by integrating Firebase, reducing crashes by 25%. Upgraded React from v16 to v18 and migrated to Webpack 5, reducing build time by 25%.',
      technologies: ['React', 'React Native', 'Kotlin', 'Fastlane', 'Firebase', 'Webpack'],
      link: 'https://www.taranawireless.com/install-app-overview/'
    },
    {
      title: 'Associate Software Engineer',
      company: 'Spundan Consultancy & IT Solutions',
      location: 'INDIA',
      period: 'JUL 2019 — JUN 2021',
      description: 'Led development of two major projects: 1) Edukop - A hybrid mobile app and admin panel built with Ionic, managing 80+ retailers and 2000+ products, featuring Razorpay integration for seamless transactions. 2) Kutubee - An E-Learning platform with interactive E-books, channel subscriptions, and integrated E-commerce. Leveraged MERN stack and AWS services for scalable architecture.',
      technologies: ['MERN Stack', 'Ionic', 'AWS', 'Razorpay'],
      link: 'https://spundan.com/'
    }
  ];

  return (
    <div id="experience" className="experience-container">
      <div className="experience-items">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <a 
              href={exp.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="experience-link"
            >
              <div className="experience-content">
                <p className="experience-period">{exp.period}</p>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company} • {exp.location}</p>
                <p className="experience-description">{exp.description}</p>
                <TechTags technologies={exp.technologies} />
                <div className="arrow-container">
                  <span className="arrow-icon">↗</span>
                </div>
              </div>
            </a>
          </ExperienceItem>
        ))}
      </div>
      
      <div className="resume-button-container">
        <a 
          href={resumePDF} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-button"
        >
          <FiDownload className="download-icon" />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
