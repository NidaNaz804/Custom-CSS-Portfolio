// Skills.tsx
import React from 'react';
import '@/app/styles/Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        {/* Text Content */}
        <div className="skills-text">
          <h2 className="skills-title">
            Technologies I Work With
          </h2>
          <p className="skills-description">
            I have a solid foundation in web development, specializing in HTML, CSS and JavaScript. 
            My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. 
            I am also proficient in Tailwind CSS for efficient styling and design with a passion for learning.
            I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>

        {/* Skills List */}
        <div className="skills-list">
          <div className="skills-columns">
            <div className="skills-column">
              <h2>TypeScript</h2>
              <h2>React.js</h2>
              <h2>Next.js</h2>
            </div>
            <div className="skills-column">
              <h2>Tailwind CSS</h2>
              <h2>Custom CSS</h2>
              <h2>Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
