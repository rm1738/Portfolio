import React from 'react';
import './About.css'; // Custom styles
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa'; // Import FontAwesome download icon

function About() {
  return (
    <div className="about-container">
      {/* Buttons for navigation */}
      <div className="button-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/experience" className="nav-button">Experience</Link>
        <Link to="/skills" className="nav-button">Skills</Link>
        <Link to="/portfolio" className="nav-button">Portfolio</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
      </div>

      <div className="profile-section">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQG44BKwhLrcZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723593301189?e=1730332800&v=beta&t=0bKWBttRzWIUimpkn6oVVLGlU6TViFes0u-V0rNe0-A" 
          alt="Profile" 
          className="profile-pic" 
        />
        <div className="download-button-container">
          <a href="/resume.pdf" download className="download-button">
            <FaDownload /> Download Resume
          </a>
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p className="intro">
            Hi, I'm Rahul Menon, I was born and raised in the city of Dubai. I moved to the United States when I was 18 for college and now I currently work as an Associate Solutions Engineer at Ranial Systems in New York City. Ranial is a dynamic startup that's pushing the boundaries by combining IoT and AI to revolutionize the industry. With a strong background in Computer and Electrical Engineering, I'm deeply committed to creating innovative solutions that drive progress in our worlds infrastructure and our quality of life.
          </p>

          <h2>Education</h2>
          <p>
            At Virginia Tech, I received a Bachelors in Computer Engineering and Electrical Engineering (Double Major) with a focus in Controls Robotics and Autonomy and a minor in Computer Science. My education provided me with a solid foundation in both the theoretical and practical aspects of engineering, which I continue to build upon in my professional career.
          </p>

          <h2>Professional Experience</h2>
          <p>
            Throughout my career, I've had the opportunity to work with an MNC such as Siemens as well as startups such as Telinstra and Ranial, where I contributed to developing software solutions and enhancing my knowledge on how a small and large business organization operates. Currently, as an Associate Solutions Engineer at Ranial Systems, I focus on implementing applications for microgrid and energy management projects. My experience spans across various domains, including AI, IoT, as well as interacting with potential clients to increase growth and business development. My responsibilities are both technical and non-technical as I also help create potential marketing campaigns for the business.
          </p>

          <h2>Skills & Expertise</h2>
          <p>
            I'm proficient in a variety of programming languages, libraries, and technologies, including Python, Java, C/C++, and more. In addition to my technical skills, I have interests in product marketing, leadership, and business development. My goal in my career is to be a well-rounded professional who can drive both technical and business success.
          </p>

          <h2>Personal Interests</h2>
          <p>
            I love playing and watching soccer, as well as cricket. Arsenal F.C is my favorite club and I love spending my weekend mornings watching soccer. I also have an interest in music and music production as during the pandemic I used to make my own music using FL Studio in my bedroom.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
