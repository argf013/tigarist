import React from 'react';
import '../styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './card';
import BasicExample from './badge';
import Avail from './Avail';
import data from '../DATA.json';

const notAvailable = () => {
  alert('Not Available Yet');
};

const placeImg = 'https://e7.pngegg.com/pngimages/649/415/png-clipart-compact-disc-compact-disc-material-data-cd-disk-electronics-computer-thumbnail.png';

function Contents() {
  const songs = data.tigarist; // mengambil data dari file JSON

  return (
    <Container>
      <Avail />
      <BasicExample />
      <Row xl={4}>
        {Object.keys(songs).map((songKey) => { // loop melalui data untuk membuat kartu lagu
          const song = songs[songKey];

          return (
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
          );
        })}
        {/* Untuk menambahkan kartu yang belum tersedia */}
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
