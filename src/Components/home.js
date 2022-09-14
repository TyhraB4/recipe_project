import Navbar from "./Components/Navbar/index.js";
import { Form, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <main>
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
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <h1>ATTCK Recipe's ™</h1>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80"
          alt="Home Page Single Pic"
        />
        <hr></hr>
        <br></br>
      </div>
      <h2 className="trending">New Recipes Trending Now</h2>
      <br></br>
      <Carousel>
        <Carousel.Item>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FT9G8LrleROVGrSCX9pzqq48sMNM%3D%2F768x576%2Fimages.kitchenstories.io%2FrecipeImages%2FRP16_01_42_FINAL.jpg&w=1440&q=85"
              alt=""
            />
            <Card.Body>
              <Card.Title>Chocolate Chip Espresso Icebox Cake</Card.Title>
              <Card.Text>Yummy chocolate cake...no oven required</Card.Text>
              <Button variant="primary">Check out Recipe Here</Button>
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
            src=""
            alt="Strawberry Jalapeno Ribs"
          />

          <Carousel.Caption>
            <h3>Strawberry Jalapeno Baby Back Ribs</h3>
            <p>Awesome ribs with a little heat and a little sweet.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
}


