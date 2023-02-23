import React, { lazy, Suspense } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LazyCardImg = lazy(() => import('react-bootstrap/CardImg'));

function Cards(props) {
  return (
    <Card className="bg-light">
      <Suspense fallback={(
        <div className="spinner-border text-center mx-auto" role="status">
          <span className="visually-hidden text-center">Loading...</span>
        </div>
      )}
      >
        <LazyCardImg variant="top" src={props.img} alt={props.phd} />
      </Suspense>
      <Card.Body>
        <Card.Title
          style={{
            color: 'black',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '15ch',
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
