import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="secondary" expand="md">
      <Container>
        <Navbar.Brand href=""> Expense Tracker </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-right-to-bracket text-dark"></i>
            </Link>
            <Link to="/register" className="nav-link">
              <i className="fa-solid fa-registered text-warning"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
