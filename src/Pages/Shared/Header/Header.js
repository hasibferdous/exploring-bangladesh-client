import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import SideNavBar from '../SideNavBar/SideNavBar';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/">Exploring Bangladesh</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-5 justify-contents-between">
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
        <Nav className='me-5'>
          <Nav.Link href=''>
            { 
            user?.uid ?
            <>
            <span>{user?.displayName}</span>
            <button onClick={handleLogOut}>Log out</button>
            </>
            :
            <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>
           
            }</Nav.Link>
        </Nav>
        <Nav className='me-5'>
          <Nav.Link href=''>{user?.photoURL ? 
          <Image style={{height: '40px'}}
          roundedCircle src={user?.photoURL}></Image>
          :<FaUser></FaUser>
        }</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
};

export default Header;