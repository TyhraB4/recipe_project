import React from "react";
import Create from "./create.js";
import { ListGroup } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

export default function Recipes(props) {
  const displayRecipes = props.recipes.map((eachRecipe) => 
      <ListGroup.Item>{eachRecipe}</ListGroup.Item>)

  return (
    <div>
      <Routes>
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  )
}
