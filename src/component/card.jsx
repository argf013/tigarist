/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../styles/card.css';

function Cards(
  props,
) {
  return (
    <Card className="bg-light">
      <Card.Img variant="top" src={props.img} alt={props.phd} />
      <Card.Body>
        <Card.Title style={{
          color: 'black',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '20ch',
        }}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ color: 'black' }}>{props.desc}</Card.Text>
        <Link to={props.link} className="link_to_song">
          {' '}
          <Button onClick={props.notAvailable}>
            {props.btnTxt}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
