import React from "react";
import App from '../App'
// import Footer from "../component/Footer";
import Hero from "../component/Hero";

const Home = () => {
    return <div className="home">
        <Hero />
        <App/>
        {/* <Footer/> */}
    </div>
    ;
}

export default Home;