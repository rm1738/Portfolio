import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import vtLogo from '../images/VT.png';

function Home() {
  const [currentText, setCurrentText] = useState('Computer Engineer');

  useEffect(() => {
    const texts = ['a Computer Engineer', 'an Electrical Engineer','a Developer','a Hokie Alumni'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[currentIndex]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <img src={vtLogo} alt="Virginia Tech Logo" className="vt-logo" />
      <div className="header-container">
        <h1 className="home-title">
          <span className="typing-animation">Hi, I'm Rahul!</span>
        </h1>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rahul-ajk-m" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/rm1738" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
      <p className="home-description">Welcome to my portfolio!</p>
      <div className="button-container">
        <button className="home-button" onClick={() => window.location.href='/experience'}>
          Experience
        </button>
        <button className="home-button" onClick={() => window.location.href='/about'}>
          About
        </button>
        <button className="home-button" onClick={() => window.location.href='/skills'}>
          Skills
        </button>
        <button className="home-button" onClick={() => window.location.href='/portfolio'}>
          Portfolio
        </button>
        <button className="home-button" onClick={() => window.location.href='/contact'}>
          Contact
        </button>
      </div>
      <div className="animated-text-container">
        <p className="animated-text">I'm <span className="text-rotate">{currentText}</span></p>
      </div>
    </div>
  );
}

export default Home;
