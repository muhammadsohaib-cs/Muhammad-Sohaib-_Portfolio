"use client";

import React from "react";
import TechIcon from "./TechIcon";

const skillsList = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind CSS", "Node.js",
  "PostgreSQL", "MySQL", "MongoDB",
  "Python", "C++", "Kotlin",
  "Git", "Docker", "Azure", "Jest", "Figma"
];

// Split skills into 3 rows for better distribution
const row1 = skillsList.slice(0, 7);
const row2 = skillsList.slice(7, 13);
const row3 = skillsList.slice(13);

// Duplicate for infinite scroll
const row1Triple = [...row1, ...row1, ...row1, ...row1];
const row2Triple = [...row2, ...row2, ...row2, ...row2];
const row3Triple = [...row3, ...row3, ...row3, ...row3];

export default function Skills() {
  return (
    <section id="skills" className="py-20 overflow-hidden relative z-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
        Tech Stack
      </h1>
      <div className="text-center text-gray-400 text-lg mb-16 font-medium tracking-wider">
        Technologies I use to bring ideas to life
      </div>

      <div className="flex flex-col gap-10 md:gap-14 relative w-full">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Left */}
        <div className="flex w-max animate-scroll hover:pause">
          {row1Triple.map((skill, index) => (
            <div
              key={`row1-${skill}-${index}`}
              className="group flex flex-col items-center justify-center mx-6 md:mx-10 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center">
                <TechIcon name={skill} className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300" />
              </div>
              <span className="text-gray-400 text-sm font-medium tracking-wide group-hover:text-blue-400 transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 - Right (Reverse) */}
        <div className="flex w-max animate-scroll-reverse hover:pause">
          {row2Triple.map((skill, index) => (
            <div
              key={`row2-${skill}-${index}`}
              className="group flex flex-col items-center justify-center mx-6 md:mx-10 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center">
                <TechIcon name={skill} className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300" />
              </div>
              <span className="text-gray-400 text-sm font-medium tracking-wide group-hover:text-purple-400 transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Row 3 - Left */}
        <div className="flex w-max animate-scroll hover:pause">
          {row3Triple.map((skill, index) => (
            <div
              key={`row3-${skill}-${index}`}
              className="group flex flex-col items-center justify-center mx-6 md:mx-10 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center">
                <TechIcon name={skill} className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300" />
              </div>
              <span className="text-gray-400 text-sm font-medium tracking-wide group-hover:text-cyan-400 transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}