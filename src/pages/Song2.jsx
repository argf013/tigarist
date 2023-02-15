/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Credit from '../component/Credit';
import data from '../DATA.json';

function Song2() {
  const lyrics = data.tigarist.song2.lyrics.join('\n');
  return (
    <div className="song2">
      <h1 className="song_title" id="main">{data.tigarist.song2.title}</h1>
      <img
        className="thumbnail"
        src="https://i.scdn.co/image/ab67616d00001e0298225b3d50907e025113a67a"
        alt={data.tigarist.song2.title}
      />

      <hr />
      <h2 style={{ textAlign: 'center' }}>Lyrics</h2>
      <br />
      <p className="lyrics">{lyrics}</p>
      <hr />
      <Credit />
      <div className="back">
        <Button className="btnback" as={Link} to="/" variant="dark">Back</Button>
        <Button className="upBtn" onClick={() => window.scrollTo(0, 0)}>↑</Button>
        <Button className="downBtn" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>↓</Button>
      </div>

    </div>
  );
}
export default Song2;
