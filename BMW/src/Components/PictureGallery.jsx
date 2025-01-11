import React from 'react';
import './PictureGallery.css';

const PictureGallery = () => {
  const images = [
    "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/xmas24/xmas24-00-teaser-hd.jpg?imwidth=1280",
    "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/bmwapp-wallpaper/bawp-00-teaser-hd.jpg?imwidth=768",
    "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/skytop/st-00-teaser-hd.jpg?imwidth=768",
    "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/25x5/25x5-00-teaser-hd.jpg?imwidth=768",
    "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/electric-future/hydrogen/hy-00-teaser-hd.jpg?imwidth=1280",
    "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/lemans/lm-00-teaser-hd.jpg?imwidth=768",
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-heading">
        <h1>ALL BMW MODELS</h1>
        <h3>Find your BMW</h3>
      </div>

      <div className="gallery">
        {/* First Row: Picture 1 takes up 50% width, Picture 2 and Picture 3 stacked vertically on the right */}
        <div className="gallery-row">
          <div className="gallery-item large">
            <img src={images[0]} alt="BMW 1" />
          </div>
          <div className="gallery-item-right">
            <div className="gallery-item right">
              <img src={images[1]} alt="BMW 2" />
            </div>
            <div className="gallery-item right">
              <img src={images[2]} alt="BMW 3" />
            </div>
          </div>
        </div>

        {/* Second Row: Three equal-sized images */}
        <div className="gallery-row full">
          <div className="gallery-item">
            <img src={images[3]} alt="BMW 4" />
          </div>
          <div className="gallery-item">
            <img src={images[4]} alt="BMW 5" />
          </div>
          <div className="gallery-item">
            <img src={images[5]} alt="BMW 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureGallery;
