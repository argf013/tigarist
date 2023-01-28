import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ img, phd, title, desc, link }) => {
  return (
    <Card className='bg-light'>
      <Card.Img variant="top" src={img} alt={phd} />
      <Card.Body>
        <Card.Title style={{color: "black"}}>{title}</Card.Title>
        <Card.Text style={{color: "black"}}>{desc}</Card.Text>
        <Button>
          <Link to={link} className='link_to_song'>Read More</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;