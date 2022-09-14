
import { Navbar, Container, Nav, Form, Button, NavDropdown, Carousel, Card,} from "react-bootstrap";

export default function NavBar() {
  return(
  <div>
    <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">ATTCK Recipe's ™</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <NavDropdown title="Recipes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/recipes">
                    Find Recipes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/recipes/new">
                    Add a New Recipe
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/recipes/edit">
                    Update or Delete a Recipe
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
};