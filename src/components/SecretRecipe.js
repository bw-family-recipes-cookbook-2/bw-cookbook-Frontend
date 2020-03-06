import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    border: "1px solid black",
    backgroundColor: "white",
    marginTop: "4%",
    margin: "2%"
  },
  background: {
    backgroundColor: "#e0f7fa",
    height: "100vh"
  }
});
const SecretRecipe = props => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  // const user_id = localStorage.getItem("user_id");
  const idNum = parseInt(id);
  const [recipe, setRecipe] = useState({
    id: "",
    name: "",
    source: "",
    category: "",
    instructions: "",
    ingredients: "",
    user_id: idNum
  });

  useEffect(() => {
    AxiosWithAuth()
      .get(`api/recipes/${id}`)
      .then(res => {
        // console.log(res);
        setRecipe(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = event => {
    event.preventDefault();

    AxiosWithAuth()
      .delete(`api/recipes/${id}`)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(err => {
        console.log("this is the error for delete", err);
      });
  };

  const handleEdit = event => {
    event.preventDefault();
    AxiosWithAuth()
      .put(`api/recipes/${id}`, recipe)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = event => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    // console.log("this is the edited recipe", recipe);
  };

  return (
    <div className={classes.background}>
      <NavBar />
      <div>
        <h1>Edit Secret Recipe</h1>
        <Grid container spacing={2} direction="row" justify="center">
          <Grid item xs={12} sm={6}>
            <form>
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Title"
                name="name"
                autoComplete="name"
                autoFocus
                value={recipe.name}
                onChange={handleChange}
              />
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="source"
                label="Source"
                name="source"
                autoComplete="source"
                autoFocus
                value={recipe.source}
                onChange={handleChange}
              />
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="ingredients"
                label="Ingredients"
                name="ingredients"
                autoComplete="ingredients"
                autoFocus
                value={recipe.ingredients}
                onChange={handleChange}
              />
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="instructions"
                label="Instructions"
                name="instructions"
                autoComplete="instructions"
                autoFocus
                value={recipe.instructions}
                onChange={handleChange}
              />
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="category"
                label="Category"
                name="category"
                autoComplete="category"
                autoFocus
                value={recipe.category}
                onChange={handleChange}
              />

              <Button
                className={classes.button}
                size="medium"
                onClick={handleEdit}
              >
                Update
              </Button>
              {/* <Link to="/dashboard"> */}
              <Button
                className={classes.button}
                size="medium"
                onClick={handleDelete}
              >
                Delete
              </Button>
              {/* </Link> */}
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SecretRecipe;
