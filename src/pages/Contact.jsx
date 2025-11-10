import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="title">I'M HERE</h1>
      <div className="contact-content">
        <p className="contact-description">
          some places you can find me. 
        </p>
        <div className="contact-links">
          <a href="https://github.com/mousecarpone" target="_blank" rel="noopener noreferrer" className="glitch-fast">
            github
          </a>
          <a href="https://linkedin.com/in/vi-lin" target="_blank" rel="noopener noreferrer" className="glitch-fast">
            linkedin
          </a>
          <a href="https://instagram.com/vi.png" target="_blank" rel="noopener noreferrer" className="glitch-fast">
            instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
