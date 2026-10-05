import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  // State variables capture the inputs to satisfy assignment criteria
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', contactNumber: '', email: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Data Captured:", formData);
    // Redirects user back to the Home Page on submit
    navigate('/');
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-panel">
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <input type="tel" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;