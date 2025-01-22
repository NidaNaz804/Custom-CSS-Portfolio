import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "@/app/styles/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          style={{ backgroundImage: "url('/logo.jpg')" }}
        ></div>

        <ul className="navbar-links">
          <li><a href="#hero" className="menuLink">Home</a></li>
          <li><a href="#projects" className="menuLink">Projects</a></li>
          <li><a href="#skills" className="menuLink">Skills</a></li>
          <li><a href="#about" className="menuLink">About</a></li>
          <li><a href="#contact" className="menuLink">Contact</a></li>
        </ul>

        <div className="menu-icon">
          {menuOpen ? (
            <FiX size={30} className="icon" onClick={toggleMenu} />
          ) : (
            <FiMenu size={30} className="icon" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            <li><a href="#hero" className="menuLink" onClick={toggleMenu}>Home</a></li>
            <li><a href="#projects" className="menuLink" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#skills" className="menuLink" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#about" className="menuLink" onClick={toggleMenu}>About</a></li>
            <li><a href="#contact" className="menuLink" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
