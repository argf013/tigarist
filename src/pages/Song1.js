import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Credit from "../component/Credit";
import Lyrics1 from "../component/Lyrics1";

const Song1 = () => {
    return <div className="song1">
        <h1 className="song_title" id="main">"Can I Still Get Into The Fluffy Little Space In Your Heart?"</h1>
        <img className="thumbnail" src="https://i.scdn.co/image/ab67616d00001e02466b641e27713881d3f8e2c7" alt="Can I Still Get Into The Fluffy Little Space In Your Heart?"/>
        <hr/>
        <Lyrics1/>
        <hr/>
            <Credit />
            <div className="back">
                <Button className="btnback" as={Link} to="/" variant="dark">Back</Button>
                <Button className="upBtn" onClick={() => window.scrollTo(0, 0)}>&#8593;</Button>
                <Button className="downBtn" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>&#8595;</Button>
            </div>

            
    </div>
    ;
}
export default Song1;