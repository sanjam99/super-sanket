import React from 'react';
import Pro from './Pro';
import fir from '../assets/image.png';
import sec from '../assets/image (1).png';
import thi from '../assets/image (2).png';

const projects = [
  {
    number: "01",
    title: "Project Managment System",
    description: "It's an PMS app in which every individual person can able to create and update it's Project task. it's made with React ,Node.js ,Express and PostgreSQL",
    image: fir
  },
  {
    number: "02",
    title: "Jadoo",
    description: "A hotel management system with seamless booking experiences and AI-driven features, built with React, React Query, TypeScript, Material-UI, Figma, Node.js, and Redis.",
    image: sec
  },
  {
    number: "03",
    title: "RAG Based Video analysis system",
    description: "A RAG based video analysis tool by which the LLM get abality to read video too.",
    image: thi
  }
];

const Project: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-6 md:mb-12 capitalize">My Projects</h1>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Pro
            key={project.number}
            number={project.number}
            title={project.title}
            description={project.description}
            image={project.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
