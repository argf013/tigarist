import React from "react";
import Badge from 'react-bootstrap/Badge';

function Avail() {
    return (
        <div className='heading albums' id='avail'>
            <h1 className="avail">
                <Badge>Available Now</Badge>
            </h1>

            <a href="https://music.apple.com/id/artist/tigarist/1623622949" target='_blank' rel="noreferrer" className="a_logos">
                <img
                    className="avail_logo"
                    alt="apple-logo"
                    src="https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/logoapple.png?alt=media&token=7a6c378a-40fb-4076-a7fd-b19fb9b46936"
                />
            </a>
            <a href="https://open.spotify.com/artist/5fbxuCvYeq2xLROMjDgYiB?si=3RDj3_dzSPWrg0PRHOtAvA" target='_blank' rel="noreferrer" className="a_logos">
                <img
                    className="avail_logo"
                    alt="spotify-logo"
                    src="https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/logospotify.png?alt=media&token=ccaa81c1-52de-4351-91c7-e5c0935ca146"
                />
            </a>
            <a href="https://music.youtube.com/channel/UCdQS8K39CpakBfQ1lx7idwg" target='_blank' rel="noreferrer" className="a_logos">
            <img
                className="avail_logo"
                alt="youtube-logo"
                src="https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/logoyoutube.png?alt=media&token=fd590e29-3c9d-41b2-bfb6-af8967f5eb1e"
            />
            </a>
        </div>
    );
}

export default Avail;