import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createRecipe } from "../actions/CreateRecipe";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "4%",
   
  },

  tallText: {
    height: 50
  },
  background:{
    backgroundColor:'#e0f7fa',
    height:'100vh',
    marginTop:"50%"
  },
  button:{
    border:'1px solid black',
    backgroundColor:'white',
    marginTop:'4%'
  }
});

const RecipeForm = props => {
  const classes = useStyles();
  const history = useHistory();

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    source: "",
    category: "",
    instructions: "",
    ingredients: ""
  });

  const handleChange = event => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
    console.log("this is the new recipe", newRecipe);
  };

  const submitRecipe = event => {
    event.preventDefault();
    props.createRecipe(newRecipe);
    history.push("/dashboard");
    console.log("submit", newRecipe);
  };

  return (
    <div className={classes.background}>
      <NavBar />

      <div className={classes.root}>
      <h1>Add Your Secret Recipe</h1>
        <form onSubmit={submitRecipe}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Title"
            name="name"
            autoComplete="name"
            autoFocus
            value={newRecipe.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="source"
            label="Source"
            name="source"
            autoComplete="source"
            autoFocus
            value={newRecipe.source}
            onChange={handleChange}
          />
          <TextField
            className={classes.tallText}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="ingredients"
            label="Ingredients"
            name="ingredients"
            autoComplete="ingredients"
            autoFocus
            value={newRecipe.ingredients}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="instructions"
            label="Instructions"
            name="instructions"
            autoComplete="instructions"
            autoFocus
            value={newRecipe.instructions}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="category"
            label="Category ie. dinner, chicken, grandma"
            name="category"
            autoComplete="category"
            autoFocus
            value={newRecipe.category}
            onChange={handleChange}
          />
          <Button className={classes.button} type="submit"> Add Recipe </Button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { createRecipe })(RecipeForm);
