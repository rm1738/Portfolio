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
            >
              <a href="https://ranial.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 className="vertical-timeline-element-title">Associate Solutions Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Ranial Systems - New York, NY</h4>
                <p>
                  Implementing and integrating applications for microgrid and energy management projects. Testing models for operational intelligence, troubleshooting AI components, and engaging with clients and partners to drive business growth.
                </p>
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
            >
              <a href="https://www.youtube.com/watch?v=jMc0rQBXLdU" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 className="vertical-timeline-element-title">Systems Integration Lead</h3>
                <h4 className="vertical-timeline-element-subtitle">BOEING & NAVAIR Project - Blacksburg, VA</h4>
                <p>
                  Built and tested an autonomous robot, snagging 3rd place at IEEE SoutheastCon 2024. Led the team to achieve 99% reliability in system activation with a green light. Streamlined timelines and cut costs while keeping everyone in the loop with detailed progress reports.
                </p>
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
            >
              <a href="https://www.siemens.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Siemens Digital - Abu Dhabi, UAE</h4>
                <p>
                  Crafted software solutions with Siemens’ MindSphere API, pulling and processing massive data sets. Delivered interactive Python dashboards for clients, making complex data easy to understand and act on.
                </p>
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
            >
              <a href="https://www.linkedin.com/company/telinstra-fzco/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 className="vertical-timeline-element-title">Software Architect Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Telinstra - Dubai, UAE</h4>
                <p>
                  Boosted performance by optimizing code, implemented thorough testing with JUnit and PyTest, and streamlined data migration for oil and gas control systems, making them faster and more reliable.
                </p>
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
            >
              <h3 className="vertical-timeline-element-title">B.S. in Computer Engineering & Electrical Engineering (Double Major)</h3>
              <h4 className="vertical-timeline-element-subtitle">Virginia Tech - Blacksburg, VA</h4>
              <p>
                Focused in Controls, Robotics, Autonomy. Minored in Computer Science. 
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2006 - 2019"
              iconStyle={{ background: '#7c1a1a', color: '#fff' }} 
              contentStyle={{ background: '#7c1a1a', color: '#fff' }}  
            >
              <h3 className="vertical-timeline-element-title">Emirates International School</h3>
              <h4 className="vertical-timeline-element-subtitle">Dubai, UAE</h4>
              <p>
                Completed high school education with receiving an IB Diploma with Higher level Mathematics, Physics and Economics.
              </p>
            </VerticalTimelineElement>
          </>
        )}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
