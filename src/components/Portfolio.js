import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  const projects = [
    {
      name: "Automated Recognition of Indian Vehicle Number Plates",
      description: "Innovated an ANPR system using Python and OpenCV, achieving a 95% accuracy in extracting Indian vehicle registration numbers.",
      image: require('../images/ANPR.webp'),
      link: "https://github.com/rm1738/Indian_Plate_Recognition"
    },
    {
      name: "Autonomous Tractor",
      description: "Constructed an autonomous tractor using Arduino, 5+ sensors, and an optimized MPU6050 Gyroscope for course correction.",
      image: require('../images/AT.webp'),
      link: "https://github.com/rm1738/Autonomous_Tractor"
    },
    {
      name: "Music Genre Classification Project",
      description: "Trained K-Nearest Neighbors and SVM algorithms to classify music genres using the GTZAN Dataset.",
      image: require('../images/class.webp'),
      link: "https://github.com/rm1738/Classifcation_of_Music_Genre"
    },
    {
      name: "Embedded Space Invaders Game Development",
      description: "Developed 'Space Invaders' game using MSP432 microcontroller, joystick, and button peripherals.",
      image: require('../images/invade.webp'),
      link: "https://github.com/rm1738/Space-Invaders-/blob/main/proj2_main.c"
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Buttons for navigation */}
      <div className="button-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/skills" className="nav-button">Skills</Link>
        <Link to="/experience" className="nav-button">Experience</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
      </div>

      <h1 className="portfolio-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            style={{ textDecoration: 'none', color: 'inherit' }} // Ensure no underline and consistent text color
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
