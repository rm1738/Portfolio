import React from 'react';
import './Contact.css'; // Custom styles
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact-container">
      {/* Buttons for navigation */}
      <div className="button-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/experience" className="nav-button">Experience</Link>
        <Link to="/skills" className="nav-button">Skills</Link>
        <Link to="/portfolio" className="nav-button">Portfolio</Link>
      </div>

      <h1 className="contact-title">Let's Connect!</h1>
      <h2 className="contact-subtitle">Contact Me</h2>
      <p className="contact-description">Leave a Message</p>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Insert your name" />

        <label htmlFor="email">Mail</label>
        <input type="email" id="email" placeholder="Insert your email" />

        <label htmlFor="message">Content</label>
        <textarea id="message" placeholder="Please enter your message"></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <p className="email-text">Email</p>
      <a href="mailto:rahulmenon@vt.edu" className="email-link">rahulmenon@vt.edu</a>
      <a href="mailto:rahulm@ranial.com" className="email-link">rahulm@ranial.com</a>
    </div>
  );
}

export default Contact;
