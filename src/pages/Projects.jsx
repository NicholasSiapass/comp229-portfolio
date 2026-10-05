import React from 'react';

function Projects() {
  // Array mapping out projects to fulfill the 3 project requirement
  const projectList = [
    {
      title: "High Danger Forecast",
      role: "Lead Developer",
      description: "Developed the visual layouts and core statistical formulas for a sportsbook-style NHL prediction website featuring head-to-head metrics.",
      image: "/hdf-project.jpg"
    },
    {
      title: "Harrison's Hope",
      role: "Webmaster & Developer",
      description: "Managed custom domain routing, SSL configurations, ongoing website maintenance, and SEO enhancements.",
      image: "/harrisons-hope.jpg"
    },
    {
      title: "Amass Market Today",
      role: "Web Developer",
      description: "Constructed custom web pages, image galleries, and event content supporting local events like the Honda Indy in Markham.",
      image: "/amass-project.jpg"
    }
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            {/* This image tag pulls directly from your public folder */}
            <img 
              src={proj.image} 
              alt={proj.title} 
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} 
            />
            <h3>{proj.title}</h3>
            <p style={{ marginBottom: '0.5rem' }}><strong>Role:</strong> {proj.role}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;