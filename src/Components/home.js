import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";

function Home() {
  return (
    <div className="homepage">
      <h2 className="trending">New Recipes Trending Now</h2>
        <br></br>
        <Carousel>
          <Carousel.Item>
            <Card style={{ width: "20rem"}}>
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
            <Card style={{ width: "20rem"}}>
              <Card.Img
                variant="top"
                src="https://www.mymoderncookery.com/wp-content/uploads/2016/05/DSC_0285.jpg.webp"
                alt="Kale and Chorizo Tacos"
              />
              <Card.Body>
                <Card.Title>Kale Chorizo Tacos</Card.Title>
                <Card.Text>Quick and easy spicy chorizo tacos with kale, mushrooms, and avacado crema.</Card.Text>
                <Button variant="primary">Check out recipe here!</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{width: "20rem"}}>
              <Card.Img
                variant="top"
                src="https://www.mymoderncookery.com/wp-content/uploads/2018/05/Curlys-Strawberry-Jalapeno-Ribs-6-of-8.jpg.webp"
                alt="Ribs with Jalapenos and Strawberries"
              />
              <Card.Body>
                <Card.Title>Strawberry Jalapeno Baby Rack Ribs</Card.Title>
                <Card.Text>Awesome ribs with a little heat and a little sweet.</Card.Text>
                <Button variant="primary">Check out recipe here!</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Home;