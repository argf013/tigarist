/* eslint-disable no-alert */
import React from 'react';
import '../styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './card';
import BasicExample from './badge';
import Avail from './Avail';
import data from '../DATA.json';

const {
  title: firstSongTitle,
  type: firstSongType,
  releaseDate: firstSongReleaseDate,
  thumbnail: firstSongThumbnail,
} = data.tigarist.song1;

const {
  title: secSongTitle,
  type: secSongType,
  releaseDate: secSongReleaseDate,
  thumbnail: secSongThumbnail,
} = data.tigarist.song2;

const notAvailable = () => {
  alert('Not Available Yet');
};

const placeImg = 'https://e7.pngegg.com/pngimages/649/415/png-clipart-compact-disc-compact-disc-material-data-cd-disk-electronics-computer-thumbnail.png';
function Contents() {
  return (
    <Container>
      <Avail />
      <BasicExample />
      <Row xl={4}>
        <Col>
          <Cards
            title={firstSongTitle}
            desc={`${firstSongType} • ${firstSongReleaseDate}`}
            img={firstSongThumbnail}
            phd={firstSongTitle}
            link="/song1"
            btnTxt="Read More"
          />
        </Col>

        <Col>
          <Cards
            title={secSongTitle}
            desc={`${secSongType} • ${secSongReleaseDate}`}
            img={secSongThumbnail}
            phd={secSongTitle}
            link="/song2"
            btnTxt="Read More"
          />
        </Col>

        <Col>
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

        <Col>
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
      </Row>

    </Container>

  );
}

export default Contents;
