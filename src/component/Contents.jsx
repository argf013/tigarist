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

const firstSong = data.tigarist.song1;
const secSong = data.tigarist.song2;
const notAvailable = () => {
  alert('Not Available Yet');
};

function Contents() {
  return (
    <Container>
      <Avail />
      <BasicExample />
      <Row xl={4}>
        <Col>
          <Cards
            title={firstSong.title}
            desc={`${firstSong.type} • ${firstSong.releaseDate}`}
            img={firstSong.thumbnail}
            phd={firstSong.title}
            link="/song1"
            btnTxt="Read More"
          />
        </Col>

        <Col>
          <Cards
            title={secSong.title}
            desc={`${secSong.type} • ${secSong.releaseDate}`}
            img={secSong.thumbnail}
            phd={secSong.title}
            link="/song2"
            btnTxt="Read More"
          />
        </Col>

        <Col>
          <Cards
            title="Coming Soon.."
            desc="---"
            img="https://e7.pngegg.com/pngimages/649/415/png-clipart-compact-disc-compact-disc-material-data-cd-disk-electronics-computer-thumbnail.png"
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
            img="https://e7.pngegg.com/pngimages/649/415/png-clipart-compact-disc-compact-disc-material-data-cd-disk-electronics-computer-thumbnail.png"
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
