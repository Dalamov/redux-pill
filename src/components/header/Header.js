import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container className="d-flex gap-3 justify-content-between">
          <Navbar.Brand href="/">Luxury Hotels</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="d-flex gap-3 justify-content-between">
              <NavLink to="/home">Home</NavLink>
              <>
                <NavLink to="/sign-in">Sign In</NavLink>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
