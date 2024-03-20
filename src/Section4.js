import React from 'react';
import './Section4.css';

const CTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h3 className="cta-subtitle">------ EXPLORE A NEW DIMENSION</h3>
        <p className="cta-text">Ready to unlock your potentials in a world of fun?</p>
        <button className="cta-button">Get started</button>
      </div>
    </div>
  );
};
const Banner = () => {
    return (
      <div className="banner-container">
        <div className="banner-image"></div>
      </div>
    );
  };
  

const Section4 = () => {
  return (
    <div className="section4-container">
      <CTA />
      <Banner />
    </div>
  );
};

export default Section4;
