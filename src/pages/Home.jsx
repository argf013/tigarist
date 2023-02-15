import React from 'react';
import Contents from '../component/Contents';
import Carousel from '../component/Carousel';
// import Footer from "../component/Footer";
// import Hero from "../component/Hero";
import Navibar from '../component/navibar';

function Home() {
  return (
    <div className="home">
      <Navibar />
      <Carousel />
      <Contents />

    </div>
  );
}

export default Home;
