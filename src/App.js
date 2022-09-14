import "./App.css";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from "./Components/home.js";
import About from "./Components/about.js";
import recipes from "./Components/recipes.js";
import NewRecipe from "./Components/newrecipe.js";
import NavBar from "./Components/Navbar/index.js";


function App() {
  const Recipes = [
    "Spicy Chicken Pad Thai",
    "Strawberry Jalapeno Baby Back Ribs",
    "Chocolate Chip Espresso Icebox Cake",
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">ATTCK Recipe's ™</h1>

          <div className="NavBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/recipes">Our Recipes</Link>
              </li>
              <li>
                <Link to="/newrecipe">Add a New Recipe</Link>
              </li>
            </ul>
          </div>
        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recipes" render={() => <Recipes recipes={recipes} />} />
          <Route path="/recipes/new" component={NewRecipe} />
        </div>
      </Router>
    </div>
  );
}

export default App;
