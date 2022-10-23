import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SideNavBar from '../SideNavBar/SideNavBar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Exploring Bangladesh</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/divisions">Divisions</Nav.Link>
            <Nav.Link href="/spots">Famous Spots</Nav.Link>
            <Nav.Link href="/hotels">Hotels</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <SideNavBar></SideNavBar>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;