import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Credit from "../component/Credit";
import Lyrics2 from "../component/Lyrics2";

const Song2 = () => {
    return <div className="song2">
    <h1 className="song_title" id="main">"Honesty & Falsity"</h1>
    <img className="thumbnail" src="https://i.scdn.co/image/ab67616d00001e0298225b3d50907e025113a67a" alt="Honesty & Falsity"/>
    <hr/>
        <Lyrics2/>
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
export default Song2;