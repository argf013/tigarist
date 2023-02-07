import React from "react";
import App from '../App'
import Carousel from "../component/Carousel";
// import Footer from "../component/Footer";
// import Hero from "../component/Hero";
import Navibar from "../component/navibar";

const Home = () => {
    return <div className="home">
        <Navibar />
        <Carousel />
        <App/>
        
    </div>
    ;
}

export default Home;