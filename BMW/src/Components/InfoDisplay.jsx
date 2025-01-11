import React from 'react';
import './InfoDisplay.css';

const InfoDisplay = () => {
  return (
    <div className="container">
      {/* Text Component */}
      <div className="text-component">
        <h1>Learn everything about</h1>
        <p>BMW here</p>
        <button className="read-more-btn"> &gt; BMW news </button>
      </div>

      {/* Image Component */}
      <div className="image-component">
        <img 
          src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-13-media-hd.jpg?imwidth=1280" 
          alt="BMW Image" 
        />
      </div>
    </div>
  );
};

export default InfoDisplay;
