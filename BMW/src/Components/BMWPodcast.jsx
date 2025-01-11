import React from 'react';
import './BMWPodcast.css'; // Updated CSS file with unique class names

const BMWPodcast = () => {
  return (
    <div className="podcast-container">
      <div className="podcast-left">
        <h2>The BMW Podcast: Changing Lanes</h2>
        <p>
          Changing Lanes is the official podcast from BMW. In these audio series,
          we take you with us on new journeys through the BMW universe. Find out
          more about sustainability, innovation, technology, mobility, and the
          latest trends. You can find and subscribe to Changing Lanes on all major
          podcast platforms, so tune in!
        </p>
        <button className="podcast-listen-btn">Listen Now</button>
      </div>

      <div className="podcast-right">
        <div className="podcast-images">
          <img
            src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/podcasts/changing_lanes/en/cl-00-teaser-high.jpg?imwidth=360"
            alt="BMW Podcast 1"
          />
          <img
            src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/hypnopolis2-podcast/cover_season_teaser_high_1350_1800.jpg?imwidth=360"
            alt="BMW Podcast 2"
          />
          <img
            src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/gamechanger/gm-00-teaser-high.jpg?imwidth=1280"
            alt="BMW Podcast 3"
          />
        </div>
        <button className="podcast-arrow">→</button>
      </div>
    </div>
  );
};

export default BMWPodcast;
