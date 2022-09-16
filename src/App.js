import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Form, Container, Nav, Navbar, Button } from "react-bootstrap";
import Home from "./Components/home.js";
import About from "./Components/about.js";
import RecipeList from "./Components/Recipes.js";


function App() { 
  return (
    <div className="App:" style={{ backgroundImage: `url("https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80")`
    }}>
      <Router>
        <header>
          <h1 className="ATTCK Recipes">Get Cooking with ATTCK Recipes!</h1>

          <Container>
            <Navbar bg="dark" expand="lg">
              <Container>
              <Navbar.Brand>ATTCK</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/about">About</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/recipes">All Recipes</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar>
          </Container>
        </header>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/recipes" element={<RecipeList/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
