import React, { useEffect } from 'react';
import Contents from '../component/Contents';
import DarkCarousel from '../component/Carousel';
// import Footer from "../component/Footer";
// import Hero from "../component/Hero";
import Navibar from '../component/navibar';

function Home() {
  useEffect(() => {
    document.title = 'Tigarist';
  }, []);

  return (
    <div className="home">
      <Navibar />
      <DarkCarousel />
      <Contents />

    </div>
  );
}

export default Home;
