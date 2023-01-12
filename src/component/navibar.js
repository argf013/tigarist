/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import loop from "./snow";
import '../navibar.css'
import { NavLink } from "react-bootstrap";
const snowy = document.getElementById('snowy');


const Navibar = () => {
  loop();
  snowy.style.display = 'none';
  const btn = () => {
    if (snowy.style.display === 'none') {
      snowy.style.display = 'block';
    } else {
      snowy.style.display = 'none';
      };
}
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tigarist</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#songs">Songs</Nav.Link> */}
            <Nav.Link href="#discography">Discography</Nav.Link>
            
          </Nav>
          <Nav>
          <NavLink href="https://www.instagram.com/tiqarist" target="_blank">
                <i class="bi bi-instagram"></i>
            </NavLink>
            <NavLink href="https://www.youtube.com/channel/UCdQS8K39CpakBfQ1lx7idwg" target="_blank">
                <i class="bi bi-youtube"></i>
            </NavLink>
            <Nav.Link onClick={btn} href="#">❅</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;