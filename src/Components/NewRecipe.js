function AddRecipe() {
  return (
    <main>
      <h1>Add a New Recipe</h1>
      <form method="POST" action="/NewRecipe">
        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="name">Recipe Name</label>
            <input
              className="form-control"
              id="name"
              name="recipe name"
              required
            />
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
  );
}

export default NewRecipe;
