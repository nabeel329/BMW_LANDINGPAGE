import React from 'react';
import './PageFooter.css';

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="footer-top">
        <div className="language-options">
          <span>English</span>
          <span>Deutsch</span>
          <span>Italiano</span>
          <span>Français</span>
          <span>Español</span>
          <span>日本語</span>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>BMW in your country</li>
            <li>BMW Group Careers</li>
            <li>EU Detergents Regulation</li>
            <li>REACH Regulation</li>
            <li>Compatibility Check</li>
            <li>Accessories Update</li>
            <li>Connected Test Vehicle</li>
            <li>Service Page Charging Products</li>
            <li>Cooperation Test Car</li>
            <li>EU Battery Regulation</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>More BMW Websites</h4>
          <ul>
            <li>BMW M</li>
            <li>BMW M Motorsport</li>
            <li>BMW Golfsport</li>
            <li>BMW M Driving Experience</li>
            <li>BMW Welt</li>
            <li>BMW Group Classic</li>
            <li>BMW Corporate/Direct Sales</li>
            <li>BMW Group</li>
            <li>BMW Group Culture</li>
            <li>BMW ConnectedDrive Upgrades</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>BMW.com</h4>
          <ul>
            <li>About BMW.com</li>
            <li>Contact</li>
            <li>Cookies</li>
            <li>Imprint</li>
            <li>Legal Notice / Data protection</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Visit us on</h4>
          <ul>
            <li>Facebook</li>
            <li>X</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© BMW AG 2025</p>
      </div>
    </footer>
  );
};

export default PageFooter;
