import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import IEEE from './components/IEEE';
import './App.css';

function App() {
  useEffect(() => {
    // Detect if the user is on a mobile device
    const isMobile = window.innerWidth <= 768;

    // Disable animations for the Experience page on mobile devices
    if (isMobile) {
      const experiencePage = document.querySelector('.experience-container');
      if (experiencePage) {
        experiencePage.style.transition = 'none'; // Disable CSS transitions
        experiencePage.style.animation = 'none';  // Disable CSS animations
      }
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ieee" element={<IEEE />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
