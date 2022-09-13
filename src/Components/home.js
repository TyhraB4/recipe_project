import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <main>
      <div>
        <h1>ATTCK Recipes™</h1>
      </div>
      <hr></hr>
      <h2 className="trending">New Recipes Trending Now</h2>
      <br></br>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="my-app\public\images\Chocolate-Chip-Cookie-Icebox-Cake-07-1089x1624_1.jpg"
            alt="Yummy Chocolate Cake Pic"
          />
          <Carousel.Caption>
            <h3>Chocolate Chip Espresso Icebox Cake</h3>
            <p>Yummy chocolate cake...no oven required</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="my-app\public\images\Kale_Chorizo_tacos.webp"
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
            className="d-block w-100"
            src=""
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

export default Home;