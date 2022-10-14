import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header () {

  const Menu = styled.nav`
      align-items: flex-end;
      border: 0.5em;
  `
  return (
      
      <Navbar bg="primary" variant="primary" expand="lg">
        <Container>
          <Navbar.Brand as={ Link } to="/">Clinica Odontologica</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Menu>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={ Link } to="/signin">SingIn</Nav.Link>
                  <Nav.Link as={ Link } to="/signup">SingUp</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Menu>                  
        </Container>
      </Navbar>
    
  );
}

export default Header;