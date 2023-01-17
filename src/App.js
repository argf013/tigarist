import React from 'react';
import Cards from './component/card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../src/component/snow'
import BasicExample from './component/badge';

function Contents() {
  return (
    <Container>
      <BasicExample/>
      <Row xl={4}>
        <Col><Cards title="Can I Still Get Into The..." desc="2022 • Single" 
        img="https://i.scdn.co/image/ab67616d00001e02466b641e27713881d3f8e2c7"
        phd="Can I Still Get into the Fluffy Little Place in Your Heart?"
        link="/Song1"
        /></Col>
        <Col><Cards title="Honesty & Falsity" desc="2022 • Single" 
        img="https://i.scdn.co/image/ab67616d00001e0298225b3d50907e025113a67a"
        phd="Honesty & Falsity"
        link="/Song2"
        /></Col>
      </Row>
    </Container>
  );
}

export default Contents;
// href="https://open.spotify.com/track/3YcKzHufHYME3I0xbx9IdV?si=639a9c6f84444dc1"

// href="https://open.spotify.com/track/4W1UXmAEcXvPoEC1yCDHIl?si=16b494168199491d"