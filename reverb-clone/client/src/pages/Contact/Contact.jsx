import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    username: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Here you would typically send the formData to your backend server.
    alert('Your message has been sent! We will get back to you shortly.');
  };

  return (
    <div className="contact-container">
      <div className="message-section">
        <h2>Need Assistance?</h2>
        <p>Please leave your name, email and any questions you have. One of our team members will respond to you shortly.</p>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name*" 
            required 
            onChange={handleInputChange} 
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject*" 
            required 
            onChange={handleInputChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email*" 
            required 
            onChange={handleInputChange} 
          />
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            onChange={handleInputChange} 
          />
          <textarea 
            name="message" 
            placeholder="Message*" 
            required 
            onChange={handleInputChange} 
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
