// About.tsx
import React from 'react';
import '@/app/styles/About.css';

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-grid">
        {/* Text Content */}
        <div className="about-text">
          <h2 className="about-title">
            About Me
          </h2>
          <p className="about-description">
            I am a passionate and dedicated front-end developer with a knack for creating functional and user-friendly web applications. 
            Through my projects, such as a BMI calculator, To-Do List, Quiz App, Digital Clock, and more, I have honed my skills in React, 
            Next.js, TypeScript, and Tailwind CSS. I enjoy building intuitive interfaces and solving real-world problems through clean and 
            efficient code. With a strong foundation in modern web development, I am constantly learning and eager to take on new 
            challenges to expand my expertise. 
          </p>
        </div>

        {/* Image */}
        <div className="about-image-container">
          <img
            src="/aboutme.jpg"
            alt="About Me"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
