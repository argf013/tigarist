import React from 'react';
import Badge from 'react-bootstrap/Badge';
import '../styles/badge.css';

function BasicExample() {
  return (
    <div className="heading albums" id="discography">
      <h1>
        <Badge bg="dark">Discography</Badge>
      </h1>
    </div>
  );
}

export default BasicExample;
