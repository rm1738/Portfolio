import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'; // Custom styles
import { Link } from 'react-router-dom';
import { FaBriefcase, FaGraduationCap, FaPython, FaJava, FaCogs } from 'react-icons/fa'; // Import FontAwesome icons
import { SiJavascript, SiCplusplus } from 'react-icons/si'; // Import more specific icons

function Experience() {
  const [showEducation, setShowEducation] = useState(false);

  return (
    <div className="experience-container">
      <h1 className="experience-title">{showEducation ? "My Education" : "My Experience"}</h1>
      
      {/* Buttons for navigation */}
      <div className="button-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/skills" className="nav-button">Skills</Link>
        <Link to="/portfolio" className="nav-button">Portfolio</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
      </div>

      <VerticalTimeline lineColor="#ffcc00"> {/* Work Experience Timeline */}
        <div className="switch-container">
          <button 
            className="switch-button" 
            onClick={() => setShowEducation(!showEducation)}
          >
            {showEducation ? (
              <><FaBriefcase /> Show Work Experience</>
            ) : (
              <><FaGraduationCap /> Show Education</>
            )}
          </button>
        </div>

        {!showEducation ? (
          <>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2024 - Present"
              iconStyle={{ background: '#7c1a1a', color: '#fff' }} 
              contentStyle={{ background: '#7c1a1a', color: '#fff' }}  
              animate={false} /* Disable animation */
            >
              <a href="https://ranial.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 className="vertical-timeline-element-title">Associate Solutions Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Ranial Systems - New York, NY</h4>
                <h4>Skills:</h4>
                <div className="skills-section">
                  <ul>
                    <li><FaPython className="skill-icon" /> Python</li>
                    <li><FaCogs className="skill-icon" /> Microgrid Management</li>
                    <li><FaCogs className="skill-icon" /> Business Development</li>
                    <li><FaJava className="skill-icon" /> Java</li>
                    <li><FaCogs className="skill-icon" /> B2B Sales</li>
                  </ul>
                </div>
              </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2023 - May 2024"
              iconStyle={{ background: '#7c1a1a', color: '#fff' }} 
              contentStyle={{ background: '#7c1a1a', color: '#fff' }}  
              animate={false} /* Disable animation */
            >
              <a href="https://www.youtube.com/watch?v=jMc0rQBXLdU" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 className="vertical-timeline-element-title">Systems Integration Lead</h3>
                <h4 className="vertical-timeline-element-subtitle">BOEING & NAVAIR Project - Blacksburg, VA</h4>
                <h4>Skills:</h4>
                <div className="skills-section">
                  <ul>
                    <li><FaJava className="skill-icon" /> Java</li>
                    <li><FaCogs className="skill-icon" /> System Integration</li>
                    <li><SiCplusplus className="skill-icon" /> C++</li>
                  </ul>
                </div>
              </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2022 - August 2022"
              iconStyle={{ background: '#7c1a1a', color: '#fff' }}  
              contentStyle={{ background: '#7c1a1a', color: '#fff' }}  
              animate={false} /* Disable animation */
            >
              <a href="https://www.siemens.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Siemens Digital - Abu Dhabi, UAE</h4>
                <h4>Skills:</h4>
                <div className="skills-section">
                  <ul>
                    <li><FaPython className="skill-icon" /> Python</li>
                    <li><SiJavascript className="skill-icon" /> JavaScript</li>
                  </ul>
                </div>
              </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2020 - May 2020"
              iconStyle={{ background: '#7c1a1a', color: '#fff' }}  
              contentStyle={{ background: '#7c1a1a', color: '#fff' }}  
              animate={false} /* Disable animation */
            >
              <a href="https://www.linkedin.com/company/telinstra-fzco/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 className="vertical-timeline-element-title">Software Architect Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Telinstra - Dubai, UAE</h4>
                <h4>Skills:</h4>
                <div className="skills-section">
                  <ul>
                    <li><FaJava className="skill-icon" /> Java</li>
                    <li><SiCplusplus className="skill-icon" /> C++</li>
                    <li><FaPython className="skill-icon" /> Python</li>
                  </ul>
                </div>
              </a>
            </VerticalTimelineElement>
          </>
        ) : (
          <>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="August 2019 - May 2024"
              iconStyle={{ background: '#7c1a1a', color: '#fff' }} 
              contentStyle={{ background: '#7c1a1a', color: '#fff' }}  
              animate={false} /* Disable animation */
            >
              <h3 className="vertical-timeline-element-title">B.S. in Computer Engineering & Electrical Engineering (Double Major)</h3>
              <h4 className="vertical-timeline-element-subtitle">Virginia Tech - Blacksburg, VA</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2006 - 2019"
              iconStyle={{ background: '#7c1a1a', color: '#fff' }} 
              contentStyle={{ background: '#7c1a1a', color: '#fff' }}  
              animate={false} /* Disable animation */
            >
              <h3 className="vertical-timeline-element-title">Emirates International School</h3>
              <h4 className="vertical-timeline-element-subtitle">Dubai, UAE</h4>
            </VerticalTimelineElement>
          </>
        )}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
