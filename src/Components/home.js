import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Card, Button} from 'react-bootstrap';

function Home() {
  return (
    <main>
      <hr></hr>
      <h2 className="trending">New Recipes Trending Now</h2>
      <br></br>
      <Carousel>
        <Carousel.Item>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
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

export default Home;