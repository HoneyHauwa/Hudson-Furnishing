import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../../src/assets/ground1.jpg';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage:`url(${BannerImage})` }}>
      <div className="ball ball1"></div>
      <div className="ball ball2"></div>
      <div className="ball ball3"></div>
      
      <div className='headerContainer' >
        <h1 style={{ fontFamily: "Brush Script MT, cursive" }}>Hudson Furnishing</h1>
        <p> Pink Royalty for your Furnishing </p>
        <Link to="/menu">
         <button> Buy Now </button>
         </Link>
        
      </div>
    </div>
  )
}

export default Home
