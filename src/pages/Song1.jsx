/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Credit from '../component/Credit';
import data from '../DATA.json';

function Song1() {
  const lyrics = data.tigarist.song1.lyrics.join('\n');
  return (
    <div className="song1">
      <h1 className="song_title" id="main">{data.tigarist.song1.title}</h1>
      <img
        className="thumbnail"
        id="thumbnail"
        src="https://i.scdn.co/image/ab67616d00001e02466b641e27713881d3f8e2c7"
        alt={data.tigarist.song1.title}
      />
      <hr />
      <h2 style={{ textAlign: 'center' }}>Lyrics</h2>

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
export default Song1;
