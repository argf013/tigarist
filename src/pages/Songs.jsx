import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Credit from '../component/Credit';
import '../styles/Songs.css';

function Song({
  title, thumbnail, lyrics, performer, writers, source, producers,
}) {
  const sanitizedLyrics = DOMPurify.sanitize(lyrics, { USE_PROFILES: { html: true } });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title}`;
  }, []);

  return (
    <div className="songs">
      <h1 className="song_title" id="main">{title}</h1>
      <img
        className="thumbnail"
        id="thumbnail"
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

function Songs({ songId }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://json.tigarist.tech/songs')
      .then((response) => response.json())
      .then((datas) => {
        setData(datas.songs);
        setIsLoading(false);
      });
  }, []);

  const songs = data.filter((song) => song.id === songId).map((song) => (
    <Song
      key={song.id}
      id={song.id}
      title={song.title}
      thumbnail={song.thumbnail}
      lyrics={song.lyrics}
      performer={song.performer}
      writers={song.writers}
      producers={song.producers}
      source={song.source}
    />
  ));

  return (
    <>
      {isLoading ? (
        <div className="spinner-border text-center mx-auto" role="status">
          <span className="visually-hidden text-center">Loading...</span>
        </div>
      ) : (
        songs
      )}
    </>
  );
}

export default Songs;
