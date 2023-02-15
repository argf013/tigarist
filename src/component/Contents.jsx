import React from 'react';
import '../styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './card';
import BasicExample from './badge';
import Avail from './Avail';

function Contents() {
  return (
    <Container>
      <Avail />
      <BasicExample />
      <Row xl={4}>
        <Col>
          <Cards
            title="Can I Still..."
            desc="2022 • Single"
            img="https://i.scdn.co/image/ab67616d00001e02466b641e27713881d3f8e2c7"
            phd="Can I Still Get into the Fluffy Little Place in Your Heart?"
            link="/song1"
            btnTxt="Read More"
          />
        </Col>

        <Col>
          <Cards
            title="Honesty & Falsity"
            desc="2022 • Single"
            img="https://i.scdn.co/image/ab67616d00001e0298225b3d50907e025113a67a"
            phd="Honesty & Falsity"
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
          />
        </Col>
      </Row>

    </Container>

  );
}

export default Contents;
