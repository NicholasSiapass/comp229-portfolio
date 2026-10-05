import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <h2>Nicholas James Siapas</h2>
      <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
        <strong>Mission Statement:</strong> To deliver high-quality, custom digital solutions and scalable web applications that empower local businesses to thrive.
      </p>
      <Link to="/about">
        <button className="cta-button">Learn More About Me</button>
      </Link>
    </div>
  );
}
export default Home;