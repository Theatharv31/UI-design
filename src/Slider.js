import React, { useState } from 'react';
import './Slider.css'; // Import CSS file for styling

const Slider = () => {
  const images = [
    '/images/fifa23/image1.jpg',
    '/images/callofduty/image1.jpg',
    '/images/athiefend/image1.jpg',
    '/images/gt/image1.jpg',
    '/images/ratchet/image1.jpg',
    '/images/fh5/image1.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextIndex = (index) => (index + 1) % images.length;

  return (
    <div className="slider-container">
      {/* First slider image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slider-image"
      />
      {/* Second slider image (next image) */}
      <img
        src={images[nextIndex(currentIndex)]} 
        alt={`Slide ${nextIndex(currentIndex)}`} 
        className="slider-image1"
      />
      <div className="button-container">
        <button className="prev-button" onClick={prevSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next-button" onClick={nextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
