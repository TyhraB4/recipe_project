import React from "react";
import "./index.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <main>
      <div>
        <h1>ATTCK Recipe's ™</h1>
      </div>
      <hr></hr>
      <h3 className="trending">New Recipes Trending Now</h3>
      <br></br>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
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
            className="d-block w-100"
            src="recipe_project/public/Images/Kale_Chorizo_tacos.webp"
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
            src="recipe_project/public/Images/Strawberry-Jalapeno-Ribs-6-of-8-1076x1624.jpg"
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

export default home;