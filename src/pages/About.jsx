import React from 'react';
import Multible from '../assets/Multible.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${Multible})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          At Hudson Furnishing, we specialize in fully furnishing homes and apartments with a touch of elegance, comfort, and creativity. Whether you're moving into a new space or simply looking to transform a single section like your kitchen, bedroom, or living room we're here to bring your vision to life.
          <br /><br />
          What sets us apart? We design with pink in mind. From soft blush tones to bold rose accents, we curate modern and unique interiors that reflect charm and personality. Pink is often overlooked in interior design, but at Hudson, it’s our signature.
          <br /><br />
          If you’re a pink lover or just looking for something refreshingly different you’ve found your perfect match. At Hudson Furnishing, pink isn’t just a color it’s a statement.
        </p>
      </div>
    </div>
  );
}

export default About;
