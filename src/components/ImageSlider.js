import React, { useState, useEffect } from 'react';
import '../assets/styles.css'; // Import CSS file

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './images/avengers.jpg',
    './images/avengers2.webp',
    './images/avengers3.webp',
    './images/avengers4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Lướt qua ảnh
    }, 3000); // Mỗi 3 giây lướt qua ảnh

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Chuyển ảnh sang trái theo index
        }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="slide" />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
