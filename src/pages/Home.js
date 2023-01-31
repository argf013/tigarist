import React from "react";
import App from '../App'
// import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navibar from "../component/navibar";

const Home = () => {
    return <div className="home">
        <Navibar />
        <Hero />
        <App/>
        
    </div>
    ;
}

export default Home;