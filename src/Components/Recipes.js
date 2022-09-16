import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

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

  const display = recipes.map(recipe => {
    return (
        <p key={recipe._id}>
          <Card style={{ width: "20rem"}}>
            <Card.Body>
              <Card.Title>
                {recipe.name}
              </Card.Title>
              <Card.Text>
                <p>{recipe.category}</p>
                <p>{recipe.type}</p>
                <Button variant="primary">Check out recipe here!</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </p>
    )
})


  // function Recipes(props) {
    // const { name, ingredients, type, instructions, category, image } = props;
      return(
        <div>
          {recipes.length && display}
          {/* <h3> Recipe List </h3> */}
            {/* <p>Name: {name}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Type: {type}</p>
            <p>Instructions: {instructions}</p>
            <p>Category: {category}</p>
            <p>Image: {image}</p> */}
        </div>
      )
  // }
}