const React = require("react");
const Def = require("../default");

function new_recipe (data) {
    
  let message = "";
  if (data.message) {
    message = <h4 className="alert-danger">{data.message}</h4>;
  }
  return (
    <Def>
      <main>
        <h1>Add a New Recipe</h1>
        {message}
        <form method="POST" action="/recipes">
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Recipe Name</label>
              <input className="form-control" id="name" name="recipe name" required />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Recipe Picture</label>
              <input className="form-control" id="pic" name="pic" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="categories">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Recipe" />
        </form>
      </main>
    </Def>
  );
}

module.exports = NewRecipe;