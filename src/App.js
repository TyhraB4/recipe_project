import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


function App() {
  return (
    <main>
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ATTCK Recipe's ™</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <NavDropdown title="Recipes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Find Recipes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Add a New Recipe
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Update or Delete a Recipe
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div>
      <img src ="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80"
      alt="Home Page Single Pic"/>
    </div>
    </main>
  );
}

export default App;
