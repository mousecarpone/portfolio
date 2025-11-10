import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">Miscellany</h1>
      <p className="projects-sub">what else i've worked on.</p>

      <div className="projects-grid">
        <div className="project-card placeholder">
          <p className="project-name">REU: HUMANS MOVE</p>
          <p className="project-desc">SUMMER 2024 // Studied Unity for VR & researched 3D Reconstruction</p>
        </div>

        <div className="project-card placeholder">
          <p className="project-name">ART GALLERY INTERNSHIP</p>
          <p className="project-desc">FALL 2024 // Digitised the Stockton University art collection</p>
        </div>

        <div className="project-card placeholder">
          <p className="project-name">Dental Patient Portal</p>
          <p className="project-desc">SPRING 2025 // Designing frontend using Vite + React</p>
        </div>

        <div className="project-card empty">more coming soon.</div>
      </div>
    </div>
  );
};

export default Projects;