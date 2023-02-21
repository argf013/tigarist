/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OffCanvas from './OffCanvas';

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

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className={isScrolled ? 'shadow' : ''}>
      <Container>
        <Navbar aria-controls="responsive-navbar-nav" />
        <Nav className="me-auto" />
        <OffCanvas />
        <Nav />
      </Container>
      <div id="snowy" />
    </Navbar>
  );
}

export default Navibar;
