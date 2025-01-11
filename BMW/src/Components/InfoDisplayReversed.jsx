import React from 'react';
import './InfoDisplayReversed.css';
import bmwLogo from '../assets/bmwlogo.jpeg'; // Import image

const InfoDisplayReversed = () => {
  return (
    <div className="container-reversed">
      {/* Image Component */}
      <div className="image-component-reversed">
        <img 
          src={bmwLogo}  // Use the imported image
          alt="BMW Logo" 
        />
      </div>

      {/* Text Component */}
      <div className="text-component-reversed">
        <h1>Learn everything about</h1>
        <p>BMW here</p>
        <button className="read-more-btn"> &gt; BMW news </button>
      </div>
    </div>
  );
};

export default InfoDisplayReversed;
