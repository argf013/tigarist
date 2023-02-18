/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="me-2 iffcanvas">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tigarist</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto" />
          <Nav>
            <NavLink href="https://www.instagram.com/tiqarist" target="_blank">
              <i className="bi bi-instagram" />
            </NavLink>
            <NavLink href="https://www.youtube.com/channel/UCdQS8K39CpakBfQ1lx7idwg" target="_blank">
              <i className="bi bi-youtube" />
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name="|||" />
      ))}
    </>
  );
}

export default Example;
