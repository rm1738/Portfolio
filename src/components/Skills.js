import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';
import { FaCode, FaWrench, FaMicrochip, FaLightbulb } from 'react-icons/fa'; // Import icons for bullet points

const skillsData = {
  programmingLanguages: [
    { name: 'Java', level: 'advanced' },
    { name: 'Python', level: 'advanced' },
    { name: 'C/C++', level: 'intermediate' },
    { name: 'JavaScript', level: 'intermediate' },
    { name: 'TypeScript', level: 'intermediate' },
    { name: 'SQL', level: 'intermediate' },
    { name: 'MATLAB', level: 'beginner' },
  ],
  toolsTechnologies: [
    { name: 'Git', level: 'advanced' },
    { name: 'Docker', level: 'intermediate' },
    { name: 'FPGA Development', level: 'beginner' },
    { name: 'Verilog', level: 'intermediate' },
  ],
  embeddedSystems: [
    { name: 'Embedded Systems', level: 'intermediate' },
    { name: 'Microcontrollers', level: 'intermediate' },
  ],
  softSkills: [
    { name: 'Team Leadership', level: 'advanced' },
    { name: 'Project Management', level: 'advanced' },
    { name: 'Product Marketing', level: 'intermediate' },
    { name: 'Business Development', level: 'intermediate' },
  ],
  
};

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      
      <div className="button-container">
        <Link to="/"><button className="home-button">Home</button></Link>
        <Link to="/experience"><button className="home-button">Experience</button></Link>
        <Link to="/about"><button className="home-button">About</button></Link>
        <Link to="/portfolio"><button className="home-button">Portfolio</button></Link>
        <Link to="/contact"><button className="home-button">Contact</button></Link>
      </div>

      <div className="skills-grid">
        <div className="skills-box">
          <h2 className="category-title"><FaCode /> Programming Languages</h2>
          <ul className="skill-list">
            {skillsData.programmingLanguages.map(skill => (
              <li key={skill.name} className={`skill-level ${skill.level}`}>
                <span className="bullet-icon"><FaCode /></span>
                {skill.name} ({skill.level.charAt(0).toUpperCase() + skill.level.slice(1)})
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-box">
          <h2 className="category-title"><FaWrench /> Tools & Technologies</h2>
          <ul className="skill-list">
            {skillsData.toolsTechnologies.map(skill => (
              <li key={skill.name} className={`skill-level ${skill.level}`}>
                <span className="bullet-icon"><FaWrench /></span>
                {skill.name} ({skill.level.charAt(0).toUpperCase() + skill.level.slice(1)})
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-box">
          <h2 className="category-title"><FaMicrochip /> Embedded Systems</h2>
          <ul className="skill-list">
            {skillsData.embeddedSystems.map(skill => (
              <li key={skill.name} className={`skill-level ${skill.level}`}>
                <span className="bullet-icon"><FaMicrochip /></span>
                {skill.name} ({skill.level.charAt(0).toUpperCase() + skill.level.slice(1)})
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-box">
          <h2 className="category-title"><FaLightbulb /> Soft Skills</h2>
          <ul className="skill-list">
            {skillsData.softSkills.map(skill => (
              <li key={skill.name} className={`skill-level ${skill.level}`}>
                <span className="bullet-icon"><FaLightbulb /></span>
                {skill.name} ({skill.level.charAt(0).toUpperCase() + skill.level.slice(1)})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
