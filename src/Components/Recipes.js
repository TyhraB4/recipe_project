//Dependencies
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css"

//Recipes Pulled From Backend
export default function RecipeList() {
  const[recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("https://attck-recipes-back-end.herokuapp.com/recipes");
      
      if (!response.ok) {
        const message = "An error occurred"
        window.alert(message);
        return;
      }

      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecipes();

    return;
  }, []);

  //Display Recipes on Recipe Route
  const display = recipes.map(recipe => {
    return (
      <div>
        <p key={recipe._id}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>
                {recipe.name}
              </Card.Title>
              <Card.Img variant="top">
                {recipe.image}
              </Card.Img>
              <Card.Text>
                <p>{recipe.category}</p>
                <p>{recipe.type}</p>
                <p>{recipe.ingredients}</p>
                <p>{recipe.instructions}</p>
                <Button variant="primary">Check out recipe here!</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </p>
      </div>
    )
})
      return(
        <div>
          {recipes.length && display}
        </div>
      )
}