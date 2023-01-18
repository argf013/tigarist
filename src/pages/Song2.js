import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Credit from "../component/Credit";

const Song2 = () => {
    return <div className="song2">
    <h1 className="song_title" id="main">"Honesty & Falsity"</h1>
    <img className="thumbnail" src="https://i.scdn.co/image/ab67616d00001e0298225b3d50907e025113a67a" alt="Honesty & Falsity">
    </img>
    <hr/>
    <h4 className="heading_lyric">Lyric</h4>
    <div className="lyric">
            <p>
            Girl, you look like an aloe vera, i mean <br/>
            I like how your blouse suits your brown eyes<br/>
            You want me to be honest<br/>
            But if i did<br/>
            Won't it be boring?<br/><br/>
            I'm not good at saying my real thought<br/>
            I said you're so pretty i'm thinking of my Grandma's chair<br/>
            If i'm being honest<br/>
            Won't it become weird?<br/><br/>
            I want to tell you the truth<br/>
            But it seems you like it<br/>
            When i say you're so pretty<br/><br/>
            Your laugh<br/>
            It's zero star out of five<br/>
            But i won't tell you<br/>
            My lies, as you can see<br/>
            Makes me nice<br/>
            Pretend i was being honest<br/>
            Won't it makes you mad?<br/><br/>
            I want to tell you the truth<br/>
            But it seems you like it<br/>
            When i say you're so pretty<br/><br/>
            I want to tell you the truth<br/>
            But it seems you like it<br/>
            When i say you're so pretty<br/>
            Baby, if you're happy i'll keep my falsity<br/>
            Salah kayanya tuh<br/>
            Hah
            </p>
        </div>
        <hr/>
        <Credit />
        <div className="back"><Button className="btnback" as={Link} to="/" variant="dark">Back</Button></div>
        
</div>
    ;
}
export default Song2;