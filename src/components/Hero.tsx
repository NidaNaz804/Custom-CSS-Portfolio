import React from 'react';
import NavBar from './NavBar';
import '@/app/styles/Hero.css'; 

const Hero = () => {
  return (
    <div id="hero" className="hero-section">
      <NavBar />

      <div className="hero-container">
        {/* Empty div for spacing */}
        <div></div>

        {/* Text Section */}
        <div className="hero-text">
          <p className="animated">Nida Naz</p>
          <p className="animated">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
