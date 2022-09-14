import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";


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
                  <NavDropdown.Item href="#action/3.1">
                    Find Recipes
                  </NavDropdown.Item>
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
          <img
            height={900}
            width={20}
            className="d-block w-75"
            src="https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FT9G8LrleROVGrSCX9pzqq48sMNM%3D%2F768x576%2Fimages.kitchenstories.io%2FrecipeImages%2FRP16_01_42_FINAL.jpg&w=1440&q=85"
            alt="Yummy Chocolate Cake Pic"
          />
          <Carousel.Caption>
            <h3>Chocolate Chip Espresso Icebox Cake</h3>
            <p>Yummy chocolate cake...no oven required</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={900}
            width={20}
            className="d-block w-75"
            src="https://www.mymoderncookery.com/wp-content/uploads/2016/05/DSC_0285-665x1024.jpg.webp"
            alt="Chorizo and Kale Taco Pic"
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
            height={950}
            width={20}
            className="d-block w-75"
            src="https://www.mymoderncookery.com/wp-content/uploads/2018/05/Curlys-Strawberry-Jalapeno-Ribs-6-of-8-1076x1624.jpg.webp"
            alt="Strawberry Jalapeno Ribs Pic"
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

export default App;
