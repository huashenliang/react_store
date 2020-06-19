import React from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';

const NavBar = () => {
  return ( 
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Drum Store</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
      <Button variant="outline-light">Sign In </Button>
  </Navbar>
   );
}
 
export default NavBar;