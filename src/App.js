import "./App.css";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Form, Container, Nav, Navbar, Button, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Home from "./Components/home.js";
import About from "./Components/about.js";
import Recipes from "./Components/Recipes.js";

function App() {
  const recipes = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App:">
      <Router>
        <header>
          <h1 className="ATTCK Recipes">Get Cooking with ATTCK Recipes!</h1>

          <Container>
            <Navbar bg="light" expand="lg">
              <Container>
              <Navbar.Brand href="#home">ATTCK</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/allrecipes">All Recipes</Nav.Link>
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
        <h2 className="trending">New Recipes Trending Now</h2>
        <br></br>
        <Carousel>
          <Carousel.Item>
            <Card style={{ width: "18rem"}}>
              <Card.Img
                variant="top"
                src="https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FT9G8LrleROVGrSCX9pzqq48sMNM%3D%2F768x576%2Fimages.kitchenstories.io%2FrecipeImages%2FRP16_01_42_FINAL.jpg&w=1440&q=85"
                alt=""
              />
              <Card.Body>
                <Card.Title> Chocolate Chip Espresso Icebox Cake</Card.Title>
                <Card.Text>Yummy chocolate cake ... no oven required</Card.Text>
                <Button variant="primary">Check out recipe here!</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=".../public/strawberry-ribs.jpg"
              alt="Chorizo and Kale Taco"
            />
            <Carousel.Caption>
              <h3>Kale Chorizo Tacos</h3>
              <p>
                Quick and easy spicy chorizo tacos with kale, mushrooms and
                avacado crema.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./public/images/"
              alt="Strawberry Jalapeno Ribs"
            />
            <Carousel.Caption>
              <h3>Strawberry Jalapeno Baby Back Ribs</h3>
              <p>Awesome ribs with a little heat and a little sweet.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Router>
    </div>
  );
}

export default App;
