import React, { useEffect, useState } from "react";

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
  }, [recipes.length]);


  function Recipes(props) {
    const { name, ingredients, type, instructions, category, image } = props;
      return(
        <div>
          <h3> Recipe List </h3>
            <p>Name: {name}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Type: {type}</p>
            <p>Instructions: {instructions}</p>
            <p>Category: {category}</p>
            <p>Image: {image}</p>
        </div>
      )
  }
  Recipes();
}