import React from "react";
import App from '../App'
import Hero from "../component/Hero";

const Home = () => {
    return <div className="home">
        <Hero />
        <App/>
    </div>
    ;
}

export default Home;