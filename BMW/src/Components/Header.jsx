import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { FaSearch } from 'react-icons/fa'; // Import search icon
import backgroundImage from '../assets/pics3.jpeg'; // Import the image from the assets folder
import bmw from '../assets/bmw.jpeg'; 

const Header = () => {
  return (
    <div className="header-container">
      {/* Background Image Section */}
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          {/* Header Section */}
          <div className="header">
            {/* Left Section */}
            <div className="header-left">
              <img src={bmw} alt="Logo" className="logo" />
              <span className="tagline">Sheer Driving Pleasure</span>
            </div>

            {/* Right Section */}
            <div className="header-right">
              <a href="#home">Home</a>
              <a href="#circular-world">Circular World</a>
              <a href="#digital-journey">Digital Journey</a>
              <a href="#electric-future">Electric Future</a>
              <a href="#freude">Freude</a>
              <a href="#mode">Mode</a>
              <FaSearch className="search-icon" />
            </div>
          </div>

          {/* Left-Aligned Text Section */}
          <div className="left-aligned-content">
            <h1 className="title">BMW iDrive</h1>
            <p className="subtitle">An evolution of control and<br />Intelligent Connectivity</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>

      {/* Sections referenced in navbar links */}
      <section id="home" className="section">Home Section</section>
      <section id="circular-world" className="section">Circular World Section</section>
      <section id="digital-journey" className="section">Digital Journey Section</section>
      <section id="electric-future" className="section">Electric Future Section</section>
      <section id="freude" className="section">Freude Section</section>
      <section id="mode" className="section">Mode Section</section>
    </div>
  );
};

export default Header;
