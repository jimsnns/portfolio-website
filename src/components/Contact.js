// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      setStatus('The message was successfully sent! ');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setStatus('There was an error. Please try again.');
    });
  };

  return (
    <div className="contact" data-aos="fade-up" data-aos-delay="100">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
        {status && (
          <div className="status-message">
            {status}
            {status === 'The message was successfully sent! ' && (
              <i className="fas fa-check-circle success-icon"></i>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
