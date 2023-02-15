/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Credit from '../component/Credit';
import data from '../DATA.json';

const song = data.tigarist.song2;
function Song2() {
  const lyrics = song.lyrics.join('\n');
  return (
    <div className="song2">
      <h1 className="song_title" id="main">{song.title}</h1>
      <img
        className="thumbnail"
        src={song.thumbnail}
        alt={song.title}
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
export default Song2;
