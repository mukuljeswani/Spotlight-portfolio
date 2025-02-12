import React from 'react'
import ExperienceItem from '../ExperienceItem/ExperienceItem';

const Experience = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Experience</h2>
      <ExperienceItem>
        <div className="space-y-2">
          <h3 className="text-xl">Frontend Engineer, ab • cd</h3>
          <p className="text-gray-400">2023 — PRESENT</p>
          <p className="text-gray-400">Job Description</p>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">JavaScript</span>
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">TypeScript</span>
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">React</span>
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">React Native</span>
          </div>
        </div>
      </ExperienceItem>
      <ExperienceItem>
        <div className="space-y-2">
          <h3 className="text-xl">Frontend Engineer, ab • cd</h3>
          <p className="text-gray-400">2023 — PRESENT</p>
          <p className="text-gray-400">Job Description</p>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">JavaScript</span>
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">TypeScript</span>
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">React</span>
            <span className="px-2 py-1 bg-slate-800 rounded text-sm">React Native</span>
          </div>
        </div>
      </ExperienceItem>
    </div>
  );
};

export default Experience
