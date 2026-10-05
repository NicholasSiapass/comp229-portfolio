import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      
      {/* This image tag pulls directly from your public folder */}
      <img 
        src="/headshot.jpg" 
        alt="Nicholas James Siapas" 
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', display: 'block' }} 
      />
      
      <p style={{ marginBottom: '1rem' }}>
        My legal name is Nicholas James Siapas. I am currently studying Software Engineering Technology and Artificial Intelligence at Centennial College. Based in Stouffville and commuting to Toronto, I am the founder of Meraki Cloud Creative, where I specialize in building custom websites, managing SEO, and designing impactful mobile applications. I am passionate about blending clean code with functional design.
      </p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ background: '#555' }}>
        View Resume (PDF)
      </a>
    </div>
  );
}
export default About;