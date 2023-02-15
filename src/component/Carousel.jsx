/* eslint-disable react/no-array-index-key */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function DarkCarousel() {
  return (
    <Carousel variant="dark" slide>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/1.png?alt=media&token=8f109246-fa6e-4bf9-bd1c-ad4cda799c0b"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/2.png?alt=media&token=927ffc76-2934-42be-8a80-91a5285ac632"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/3.png?alt=media&token=c47c170c-5fc8-43e2-90c9-c675960f7784"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default DarkCarousel;
