import React from 'react';
import './ImagesSection.css'; // Import the CSS file for styling
import leftImage from '../assets/BMW4.jpg'; // Import the first image
import rightImage from '../assets/ota-00-teaser-square.jpeg'; // Import the second image

const ImagesSection = () => {
  return (
    <div className="images-section">
      {/* Left Image */}
      <div className="image-container">
        <img src={leftImage} alt="Left Side" className="side-image" />
        <div className="image-text">
          <h4>Smart Asistance</h4>
          <h1>The BMW driving</h1>
          <h1>Companionship</h1>
          <button className="read-more-button">Read More</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="image-container">
        <img src={rightImage} alt="Right Side" className="side-image" />
        <div className="image-text">
          <h4>Over the air updates</h4>
          <h1>The joy of ever-</h1>
          <h1>Evolving</h1>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
