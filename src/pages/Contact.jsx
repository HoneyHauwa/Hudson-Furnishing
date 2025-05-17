import React from 'react';
import Left from '../assets/Left.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" style={{ backgroundImage:`url(${Left})` }}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
<form action="" id="contact-form" method="POST">
  <label htmlFor="name">Full Name</label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter your full name"
    required
  />

  <label htmlFor="email">Email Address</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email"
    required
  />

  <label htmlFor="phone">Phone Number</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="Enter your phone number"
  />


  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="message"
    rows="4"
    placeholder="Write your message here..."
    required
  ></textarea>

  <button type="submit">Send Message</button>
</form>

        </div>
      
    </div>
  )
}

export default Contact
