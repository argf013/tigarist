import React, { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/1.png?alt=media&token=8f109246-fa6e-4bf9-bd1c-ad4cda799c0b",
    "https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/2.png?alt=media&token=927ffc76-2934-42be-8a80-91a5285ac632",
    "https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/3.png?alt=media&token=c47c170c-5fc8-43e2-90c9-c675960f7784",
  ];

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="carousel slide carousel-dark" id="carouselExampleAutoplaying" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, i) => (
          <div
            key={i}
            className={`carousel-item ${index === i ? "active" : ""}`}
          >
            <img src={image} className="d-block w-50 mx-auto" alt="tigarist" />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
