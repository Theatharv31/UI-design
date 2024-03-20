import React from 'react';
import Slider from './Slider';
import Explore from './Explore';
import './Section1.css';

const Section1 = () => {
  return (
    <div className="section1">
      <Explore />
      <Slider />
    </div>
  );
};

export default Section1;
