import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <main>
      <hr></hr>
      <h2 className="trending">New Recipes Trending Now</h2>
      <br></br>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Yummy Chocolate Cake"
          />
          <Carousel.Caption>
            <h3>Chocolate Chip Espresso Icebox Cake</h3>
            <p>Yummy chocolate cake...no oven required</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=".\public\logo192.png"
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