import "./App.css";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from "./src/components/home.js";
import About from ".src/Components/about.js";
import Packages from "./components/Packages";

function App() {
  const recipes = [
    "Spicy Chicken Pad Thai",
    "Strawberry Jalapeno Baby Back Ribs",
    "Chocolate Chip Espresso Icebox Cake",
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">ATTCK Recipe's ™</h1>

          <div className="Navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/recipes">Our Packages</Link>
              </li>
            </ul>
          </div>
        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About Us} />
          <Route
            path="/recipes"
            render={() => <Recipes recipes={recipes} />}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
