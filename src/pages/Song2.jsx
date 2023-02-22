/* eslint-disable react/no-danger */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import Credit from '../component/Credit';
import data from '../DATA.json';
import '../styles/Songs.css';

const {
  title,
  thumbnail,
  lyrics,
  performer,
  writers,
  source,
  producers,
} = data.tigarist.song2;

const sanitizedLyrics = DOMPurify.sanitize(lyrics, { USE_PROFILES: { html: true } });

function Song2() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title}`;
  }, []);
  return (
    <div className="song2">
      <h1 className="song_title" id="main">{title}</h1>
      <img
        className="thumbnail"
        src={thumbnail}
        alt={title}
      />

      <hr />
      <h2 style={{ textAlign: 'center' }}>Lyrics</h2>
      <p className="lyrics" dangerouslySetInnerHTML={{ __html: sanitizedLyrics }} />
      <hr />
      <Credit
        performer={performer}
        writers={writers}
        producers={producers}
        source={source}
      />
      <div className="back">
        <Button className="btnback" as={Link} to="/" variant="dark">Back</Button>
      </div>

    </div>
  );
}
export default Song2;
