// Contact.tsx
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import '@/app/styles/Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        {/* Get in Touch Section */}
        <div className="contact-info">
          <h2 className="contact-title">
            Get in Touch
          </h2>
          <p className="contact-description">
            Drop me a line, give me a call, or send a message by submitting the form below.
          </p>
          <div className="contact-item">
            <FiMail size={20} className="contact-icon" />
            <span className="contact-text">nidanaz804@gmail.com</span>
          </div>
          <div className="contact-item">
            <BsFillTelephoneFill size={20} className="contact-icon" />
            <span className="contact-text">(+92) 333-3255677</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Your Name"
            />
          </div>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Your Email"
            />
          </div>
          {/* Message Textarea */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="form-textarea"
              placeholder="Your Message"
            />
          </div>
          {/* Submit Button */}
          <button className="form-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
