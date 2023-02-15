/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';

const snowy = document.getElementById('snowy');
function Navibar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      snowy.innerHTML += '<div class="snowflake">❅</div>';
    }
  }, []);
  snowy.style.display = 'none';
  const btn = () => {
    if (snowy.style.display === 'none') {
      snowy.style.display = 'block';
    } else {
      snowy.style.display = 'none';
    }
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className={isScrolled ? 'shadow' : ''}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <NavLink href="https://www.instagram.com/tiqarist" target="_blank">
              <i className="bi bi-instagram" />
            </NavLink>
            <NavLink href="https://www.youtube.com/channel/UCdQS8K39CpakBfQ1lx7idwg" target="_blank">
              <i className="bi bi-youtube" />
            </NavLink>
            <Nav.Link onClick={btn} href="#">❅</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div id="snowy" />
    </Navbar>
  );
}

export default Navibar;
