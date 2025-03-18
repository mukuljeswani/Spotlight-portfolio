import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import { Link } from 'react-router-dom';
import TechTags from '../TechTags/TechTags';
import './Projects.css';

import taranaImg from '../../assets/images/tarana.png';
import edukopImg from '../../assets/images/edukop.png';
import kutubeeImg from '../../assets/images/kutubee.png';
import nyceImg from '../../assets/images/nyce.png';

const Projects = () => {
  // Using inline base64 images for simplicity
  const auctionImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120' fill='none'%3E%3Crect width='180' height='120' fill='%230a192f'/%3E%3Cpath d='M60 80 L90 40 L120 80' stroke='%2364ffda' stroke-width='2' fill='none'/%3E%3Ccircle cx='90' cy='60' r='25' stroke='%2364ffda' stroke-width='2' fill='none'/%3E%3C/svg%3E";

  const busImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120' fill='none'%3E%3Crect width='180' height='120' fill='%230a192f'/%3E%3Crect x='40' y='40' width='100' height='50' rx='10' stroke='%2364ffda' stroke-width='2'/%3E%3Ccircle cx='60' cy='90' r='8' stroke='%2364ffda' stroke-width='2'/%3E%3Ccircle cx='120' cy='90' r='8' stroke='%2364ffda' stroke-width='2'/%3E%3C/svg%3E";

  const featuredProjects = [
    {
      year: '2023',
      title: 'Tarana Install',
      description: 'Developed a React Native application for non-line-of-sight communication installation featuring deep linking, OAuth authentication, and offline maps with caching. Integrated native gRPC for hardware communication and implemented comprehensive monitoring with Firebase.',
      technologies: ['React Native', 'Kotlin', 'Redux', 'Firebase', 'gRPC'],
      image: taranaImg,
      link: 'https://www.taranawireless.com/install-app-overview/'
    },
    {
      year: '2021',
      title: 'Edukop',
      description: 'Designed a robust hybrid mobile application using Ionic, featuring a comprehensive admin panel to streamline the management of retailers and products. Integrated Razorpay for seamless payment processing and AWS S3 for efficient content delivery.',
      technologies: ['MERN Stack', 'Ionic', 'AWS S3', 'Razorpay'],
      image: edukopImg,
      link: 'https://www.edukop.com/'
    },
    {
      year: '2020',
      title: 'Kutubee',
      description: 'Developed an E-Learning platform with interactive E-books and channel subscriptions. Built comprehensive admin panels and a hybrid mobile application, integrating E-commerce functionality for seamless content distribution.',
      technologies: ['MERN Stack', 'Ionic', 'AWS'],
      image: kutubeeImg,
      link: 'https://www.kutubee.com/'
    },
    {
      year: '2023',
      title: 'NYCE',
      description: 'Engineered a distinctive e-commerce online auction platform tailored to a specialized niche market. Led the end-to-end design process, integrating webhooks for live auction price updates and implementing cloud-based solutions using AWS stack for enhanced scalability.',
      technologies: ['React', 'Python', 'AWS'],
      image: nyceImg,
      link: 'https://nycanx.com/'
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="projects-header">
        <Link to="/allProjects" className="view-all-link">
          View All
        </Link>
      </div>

      <div className="projects-list">
        {featuredProjects.map((project, index) => (
          <ExperienceItem key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post-link"
            >
              <div className="blog-post-content">
                <div className="blog-image-container">
                  <img src={project.image} alt={project.title} className="blog-image" />
                </div>

                <div className="blog-details">
                  <p className="blog-year">{project.year}</p>
                  <h3 className="blog-title">
                    {project.title}
                    <span className="arrow-icon">↗</span>
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <TechTags technologies={project.technologies} />
                </div>
              </div>
            </a>
          </ExperienceItem>
        ))}
      </div>
    </div>
  );
};

export default Projects;
