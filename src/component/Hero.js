/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import '../styles/Hero.css'
import { ThreeDots as Loader } from "react-loader-spinner";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className="hero-container">
      {!isImageLoaded && !hasError && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
      <img
        src="https://i.ibb.co/rMptksX/hero.png"
        className="img-responsive"
        alt="example image"
        onLoad={() => setIsImageLoaded(true)}
        onError={() => setHasError(true)}
      />
      {hasError && <p>Failed to load image</p>}
    </div>
  );
};

export default Hero;