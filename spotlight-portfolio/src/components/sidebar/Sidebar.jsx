import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Mukul Jeswani</h1>
        <h2>FrontEnd Engineer</h2>
        <p>I build fun projects</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>PROJECTS</li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          {/* <a href="#">CodePen</a> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;