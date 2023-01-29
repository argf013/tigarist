import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Credit from "../component/Credit";

const Song1 = () => {
    return <div className="song1">
        <h1 className="song_title" id="main">"Can I Still Get Into The Fluffy Little Space In Your Heart?"</h1>
        <img
            className="thumbnail"
            src="https://i.scdn.co/image/ab67616d00001e02466b641e27713881d3f8e2c7"
            alt="Can I Still Get Into The Fluffy Little Space In Your Heart?"
        />
        <hr />
        <h2 style={{ textAlign: 'center' }}>Lyrics</h2><br />
        <p className="lyrics">All of these eyes are into you <br />
            And I like how you are <br />
            So unaware of it <br />
            You're just like an abstract palette <br />
            I don't know why <br /> <br />
            I thought the star is too shy to come out <br />
            Cause you're full of beauty <br />
            But I forgot it's Jakarta skies <br />
            So, pollutions, you know? <br />
            But it's okay my knee still hurts anyway <br /><br />
            Although you're just sittin' there <br />
            But it feels like you got the power to make me buy you roses <br />
            Yet I can't do anything with this empty wallet <br />
            Can I still get into the fluffy little space in your heart? <br /><br />
            Must be nice <br />
            If you become my new queen <br />
            Even though <br />
            I know my imagination <br />
            Will only tattoo <br />
            A wound in my heart <br /><br />
            I know you're just sittin' there <br />
            But it feels like you got the power to make me fall in love oh <br />
            Can I still get into the fluffy little space in your?<br />
        </p>
        <hr />
        <Credit />
        <div className="back">
            <Button className="btnback" as={Link} to="/" variant="dark">Back</Button>
            <Button className="upBtn" onClick={() => window.scrollTo(0, 0)}>↑</Button>
            <Button className="downBtn" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>↓</Button>
        </div>
    </div>
        ;
}
export default Song1;