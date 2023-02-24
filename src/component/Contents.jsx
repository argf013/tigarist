/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './card';
import BasicExample from './badge';
import Avail from './Avail';

function Contents() {
  const [songs, setSongs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://json.tigarist.tech/songs/');
        const data = await response.json();
        setSongs(data.songs);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="spinner-border text-center mx-auto" role="status">
        <span className="visually-hidden text-center">Loading...</span>
      </div>
    );
  }

  const notAvailable = () => {
    alert('Not Available Yet');
  };

  const placeImg = 'https://e7.pngegg.com/pngimages/649/415/png-clipart-compact-disc-compact-disc-material-data-cd-disk-electronics-computer-thumbnail.png';

  return (
    <Container>
      <Avail />
      <BasicExample />
      <Row xl={4}>
        {songs.map((song) => (
          <Col key={song.title}>
            <Cards
              title={song.title}
              desc={`${song.type} • ${song.releaseDate}`}
              img={song.thumbnail}
              phd={song.title}
              link={`song/${song.id}`}
              btnTxt="Read More"
            />
          </Col>
        ))}
        {[...Array(2)].map((_, index) => (
          <Col key={`placeholder-${index}`}>
            <Cards
              title="Coming Soon.."
              desc="---"
              img={placeImg}
              phd="Untitled"
              link="/"
              btnTxt="Unavailable"
              notAvailable={notAvailable}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Contents;
