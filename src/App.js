import './App.css';
import {Navbar, Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap';
import Home from './Components/home';

function App() {
  return (
    <div>
      <Navbar sticky = "top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ATTCK Recipes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <NavDropdown title="My Recipe Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">View Saved Recipes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Edit An Existing Recipe</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Add New Recipe</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Home />
    </div>
  );
}

export default App;
