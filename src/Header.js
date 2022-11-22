import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  
  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };

  const [item, setItems] = useState([])

  useEffect(() => {
      const item = JSON.parse(localStorage.getItem('token-info'));

      console.log(item)
      if (item) {
          setItems(item);
      }
  }, []);
  return (
   <>
   

   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Nav.Link href="#classes">{item.name}</Nav.Link>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto">

            <Nav.Link href="#classes">CLASSES</Nav.Link>
            <Nav.Link href="#templates">TEMPLATES</Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link href="#pricing">PRICING   </Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <button style={{"float" : "right"}} href="#pricing" onClick={logout}>
            <Link to="/">LogOut</Link>

              </button>
      </Container>
    </Navbar>
   </>
  )
}

export default Header

// careers@actofit.in