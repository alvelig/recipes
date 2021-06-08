import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Recipes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationMenu;
