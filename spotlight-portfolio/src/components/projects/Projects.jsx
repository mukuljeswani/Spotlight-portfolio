import React from 'react'
import ExperienceItem from '../ExperienceItem/ExperienceItem';

const Projects = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Projects</h2>
      <ExperienceItem>
        <div className="space-y-2">
          <h3 className="text-xl">Portfolio Website</h3>
          <p className="text-gray-400">personal portfolio website</p>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">React</span>
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">CSS</span>
          </div>
        </div>
      </ExperienceItem>
    </div>
  );
};

export default Projects;
