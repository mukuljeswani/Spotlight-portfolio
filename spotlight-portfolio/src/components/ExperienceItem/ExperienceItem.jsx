import React from 'react'

const ExperienceItem = ({ children }) => {
    return (
      <div className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/50">
        <div 
          className="absolute inset-0 rounded-lg transition-opacity opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(to right, rgba(100,150,255,0.1), transparent)',
            maskImage: 'linear-gradient(to left, transparent 0%, black 100%)'
          }}
        />
        {children}
      </div>
    );
  };
  

export default ExperienceItem;
